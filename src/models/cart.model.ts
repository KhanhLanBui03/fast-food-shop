import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Cart_item } from './cart_item.model';
import { Ingredient } from './ingredient.model';

@Table
export class Cart extends Model<Cart> {
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
    quantity!: number;
    @ForeignKey(() => Cart_item)
    @Column({ type: DataType.INTEGER, allowNull: false })
    cartItemId!: number;
    @BelongsTo(() => Cart_item)
    cartItem!: Cart_item;
    @ForeignKey(() => Ingredient)
    @Column({ type: DataType.INTEGER, allowNull: false })
    ingredientId!: number;
    @BelongsTo(() => Ingredient)
    ingredient!: Ingredient;
}