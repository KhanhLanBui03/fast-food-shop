import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import {  OrderItem } from './order-item.model';
import { Ingredient } from './ingredient.model';

@Table({ tableName: 'order_item_ingredients', timestamps: true })
export class OrderItemIngredient extends Model<OrderItemIngredient> {
    @ForeignKey(() => OrderItem)
    @Column({ type: DataType.INTEGER, allowNull: false })
    orderItemId!: number;

    @ForeignKey(() => Ingredient)
    @Column({ type: DataType.INTEGER, allowNull: false })
    ingredientId!: number;

    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 1 })
    quantity?: number;

    @BelongsTo(() => OrderItem)
    orderItem?: OrderItem;

    @BelongsTo(() => Ingredient)
    ingredient?: Ingredient;
}
