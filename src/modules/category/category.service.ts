import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/models/category.model';


@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category)
        private readonly categoryModel: typeof Category
    ){}

    async createCategory(data: Partial<Category>): Promise<Category> {
        const category = await this.categoryModel.create(data as any);
        return category;
    }

    async getAllCategories(): Promise<Category[]> {
        return this.categoryModel.findAll();
    }

    async findCategoryById(id: number): Promise<Category | null> {
        return this.categoryModel.findByPk(id);
    }
    async updateCategory (id:number, data: Partial<Category>): Promise<Category | null> {
        const category = await this.categoryModel.findByPk(id);
        if (!category) {
            return null;
        }
        return await category.update(data);
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
