# --- Bước 1: Build source code ---
FROM node:18-alpine AS builder

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy file cấu hình
COPY package*.json ./

# Cài đặt dependencies (dành cho build)
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build NestJS sang mã JS
RUN npm run build

# --- Bước 2: Tạo image chạy app ---
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy lại node_modules và build output từ builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json ./

# Biến môi trường
ENV NODE_ENV=production
EXPOSE 3000

# Lệnh chạy app
CMD ["node", "dist/main.js"]