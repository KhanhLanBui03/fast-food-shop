import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/models';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product) private readonly productModel: typeof Product,
    ){}

    async createProduct(data: Partial<Product>): Promise<Product> {
        const product = await this.productModel.create(data as any);
        return product;
    }
}
