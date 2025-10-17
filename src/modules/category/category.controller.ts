import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/models';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }
  @Post()
  async createCategory(@Body() data: Partial<Category>) {
    return this.categoryService.createCategory(data);
  }
  @Get("/all")
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }
  @Get(":id")
  async findCategoryById(@Param("id") id: number) {
    return this.categoryService.findCategoryById(id);
  }
  @Put(":id")
  async updateCategory(@Param("id") id: number, @Body() data: Partial<Category>) {
    return this.categoryService.updateCategory(id, data);
  }
  @Delete(":id")
  async deleteCategory(@Param("id") id: number) {
    return this.categoryService.deleteCategory(id);
  }
  @Get(":id/products")
  async getCategoryWithProducts(@Param("id") id: number) {
    return this.categoryService.getCategoryWithProducts(id);
  }
}
