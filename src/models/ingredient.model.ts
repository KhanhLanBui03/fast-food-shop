import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Category } from './category.model';
import { Product_ingredient } from './product_ingredient.model';
import { Cart } from './cart.model';

@Table
export class Ingredient extends Model<Ingredient> {
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;
    @Column({ type: DataType.STRING, allowNull: false })
    imageUrl:string;
    @Column({ type: DataType.TEXT, allowNull: true })
    description:string;
    @Column({ type: DataType.INTEGER, allowNull: false,defaultValue:0 })
    price: number;
    @Column({ type: DataType.BOOLEAN, defaultValue: true, allowNull: true })
    isActive: boolean;
    @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: true })
    isFeatured: boolean;
    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER, allowNull: false })
    categoryId:number;
    @BelongsTo(() => Category)
    category:Category;
    @HasMany(() => Product_ingredient)
    product_ingredients?: Product_ingredient[];
    @HasMany(() => Cart)
    cart?:Cart[];



}