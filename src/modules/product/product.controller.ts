import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/models';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post("/them-moi-san-pham")
  async createProduct(@Body() createProductDto:CreateProductDto) {
    const created = await this.productService.createProduct(createProductDto);
    return {
      message: "Thêm mới sản phẩm thành công",
      data: created,
    }
  }
  @Get()
  async getAllProducts() {
    const products = await this.productService.getAllProducts();
    return {
      message: "Lấy danh sách sản phẩm thành công",
      data: products,
    };
  }
  @Put("/:id")
  async updateProduct(@Param("id") id: number,@Body() updateProductDto:UpdateProductDto) {
    const updated = await this.productService.updateProduct(id, updateProductDto);
    return{
      message: "Cập nhật sản phẩm thành công",
      data: updated,
    }
  }
  @Delete("/:id")
  async deleteProduct(@Param("id") id:number) {
    const deleted = await this.productService.deleteProduct(id);
    return {
      message: "Xóa sản phẩm thành công",
      data: deleted,
    };
  }
}
