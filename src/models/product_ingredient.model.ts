import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from './product.model';
import { Ingredient } from './ingredient.model';

@Table
export class Product_ingredient extends Model<Product_ingredient> {
    @Column({ type: DataType.BOOLEAN, allowNull: false})
    isDefault!: boolean;
    @Column({ type: DataType.INTEGER, allowNull: true})
    quantity!: number;
    @ForeignKey(() => Product)
    @Column({type:DataType.INTEGER, allowNull: false})
    productId : number;
    @BelongsTo(()=>Product)
    product : Product;
    @ForeignKey(() => Ingredient)
    @Column({type:DataType.INTEGER, allowNull: false})
    ingredientId : number;
    @BelongsTo(() => Ingredient)
    ingredient : Ingredient;

    
}