import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CartItem } from './cart-item.model';
import { Ingredient } from './ingredient.model';

@Table({ tableName: 'cart', timestamps: true })
export class Cart extends Model<Cart> {
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
    quantity!: number;
    @ForeignKey(() => CartItem)
    @Column({ type: DataType.INTEGER, allowNull: false })
    cartItemId!: number;
    @BelongsTo(() => CartItem)
    cartItem!: CartItem;
    @ForeignKey(() => Ingredient)
    @Column({ type: DataType.INTEGER, allowNull: false })
    ingredientId!: number;
    @BelongsTo(() => Ingredient)
    ingredient!: Ingredient;
}