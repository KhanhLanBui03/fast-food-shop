import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/models';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  async createProduct(@Body() data: Partial<Product>) {
    return this.productService.createProduct(data);
  }
}
