import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/models';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }
  @Post("/them-moi")
  async createCategory(@Body() data: CreateCategoryDto) {
    const created = await this.categoryService.createCategory(data);
    return {
      message: "Thêm mới thành công",
      data: created,
    };
  }
  @Get()
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }
  @Get(":id")
  async findCategoryById(@Param("id") id: number) {
    return this.categoryService.findCategoryById(id);
  }
  @Put(":id")
  async updateCategory(@Param("id") id: number, @Body() data: UpdateCategoryDto) {
    const updated = await this.categoryService.updateCategory(id, data);
    return {
      message: "Cập nhật thành công",
      data: updated,
    }
  }
  @Delete(":id")
  async deleteCategory(@Param("id") id: number) {
    const deleted = await this.categoryService.deleteCategory(id);
    return {
      message: "Xóa thành công",
      data: deleted,
    }
  }
  @Get(":id/products")
  async getCategoryWithProducts(@Param("id") id: number) {
    return this.categoryService.getCategoryWithProducts(id);
  }
}
