import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/models';
import { CreateProductDto } from './dto/create-product.dto';
import {UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product) private readonly productModel: typeof Product,
    ){}

    async createProduct(createProductDto:CreateProductDto){
        const product = await this.productModel.create(createProductDto as any);
        return product;
    }
    async getAllProducts(): Promise<Product[]> {
        return this.productModel.findAll();
    }
    async findProductById(id: number): Promise<Product | null> {
        return this.productModel.findByPk(id);
    }
    async updateProduct(id:number,updateProductDto:UpdateProductDto){
        const product =  await this.productModel.findByPk(id);
        if (!product) {
            return null;
        }
        return await product.update(updateProductDto);
    }
    async deleteProduct(id:number):Promise<boolean>{
        const product =  await this.productModel.findByPk(id);
        if (!product) {
            return false;
        }
        await product.destroy();
        return true;
    }
}
