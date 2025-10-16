import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import {  Order_item } from './order_item.model';
import { Ingredient } from './ingredient.model';

@Table({ tableName: 'order_item_ingredients', timestamps: true })
export class OrderItemIngredient extends Model<OrderItemIngredient> {
    @ForeignKey(() => Order_item)
    @Column({ type: DataType.INTEGER, allowNull: false })
    orderItemId!: number;

    @ForeignKey(() => Ingredient)
    @Column({ type: DataType.INTEGER, allowNull: false })
    ingredientId!: number;

    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 1 })
    quantity?: number;

    @BelongsTo(() => Order_item)
    orderItem?: Order_item;

    @BelongsTo(() => Ingredient)
    ingredient?: Ingredient;
}
