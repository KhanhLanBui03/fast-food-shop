import { Address } from '../models/address.model';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Carts } from '../models/carts.model';
import { Category } from '../models/category.model';
import { Coupon } from '../models/coupon.model';
import { Ingredient } from '../models/ingredient.model';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/order-item.model';
import { OrderItemIngredient } from '../models/order-item-ingredient.model';
import { Product } from '../models/product.model';
import { ProductIngredient } from '../models/product-ingredient.model';
import { ProductVariants } from '../models/product-variants.model';
import { Review } from '../models/review.model';
import { User } from '../models/user.model';
import { UserCoupon } from '../models/user-coupon.model';
import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';

export const sequelizeConfig = (config: ConfigService): SequelizeModuleOptions => ({
  dialect: config.get<Dialect>('DB_DIALECT') ?? 'mysql',
  host: config.get<string>('DB_HOST'),
  port: Number(config.get<number>('DB_PORT') ?? 3306),
  username: config.get<string>('DB_USER'),
  password: config.get<string>('DB_PASS'),
  database: config.get<string>('DB_NAME'),
  autoLoadModels: true,  // ⚠️ thêm dòng này
  synchronize: true,
  models: [
    User, UserCoupon, Address, Category, Cart, CartItem, Carts,
    Ingredient, Product, OrderItem, Order, OrderItemIngredient,
    Review, Coupon, ProductVariants, ProductIngredient,
  ],
});
