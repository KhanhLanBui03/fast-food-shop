import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Order } from './order.model';
import { Product } from './product.model';
import { ProductVariants } from './product-variants.model';

@Table({tableName:'order_items', timestamps: true })
export class OrderItem extends Model<OrderItem> {
    @Column({ type: DataType.INTEGER, allowNull: false })
    quantity: number;
    @ForeignKey(() => Order)
    @Column({ type: DataType.INTEGER, allowNull: false })
    orderId: number;
    @BelongsTo(() => Order)
    order: Order
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId: number;
    @BelongsTo(() => Product)
    product: Product
    @ForeignKey(() => ProductVariants)
    @Column({ type: DataType.INTEGER, allowNull: false })
    variantId: number;
    @BelongsTo(() => ProductVariants)
    variant: ProductVariants;
}