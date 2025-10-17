import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/models/category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';


@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category)
        private readonly categoryModel: typeof Category
    ){}

    async createCategory(createCategoryDto: CreateCategoryDto){
        const category = await this.categoryModel.create(createCategoryDto as any);
        return category;
    }

    async getAllCategories(): Promise<Category[]> {
        return this.categoryModel.findAll();
    }

    async findCategoryById(id: number): Promise<Category | null> {
        return this.categoryModel.findByPk(id);
    }
    async updateCategory (id:number, updateCategoryDto: UpdateCategoryDto): Promise<Category | null> {
        const category = await this.categoryModel.findByPk(id);
        if (!category) {
            return null;
        }
        return await category.update(updateCategoryDto);
    }

    async deleteCategory (id:number): Promise<boolean> {
        const category = await this.categoryModel.findByPk(id);
        if (!category) {
            return false;
        }
        await category.destroy();
        return true;
    }
    async getCategoryWithProducts(categoryId: number): Promise<Category | null> {
        return this.categoryModel.findByPk(categoryId, { include: { all: true } });
    }
}
