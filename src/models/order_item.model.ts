import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Order } from './order.model';
import { Product } from './product.model';
import { Product_variants } from './product_variants.model';

@Table
export class Order_item extends Model<Order_item> {
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
    @ForeignKey(() => Product_variants)
    @Column({ type: DataType.INTEGER, allowNull: false })
    variantId: number;
    @BelongsTo(() => Product_variants)
    variant: Product_variants
}