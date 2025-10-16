import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Order } from './order.model';
import { Product } from './product.model';
import { User } from './user.model';

@Table
export class Review extends Model<Review> {
    @Column({ type: DataType.INTEGER, allowNull: false })
    rating: number;
    @Column({ type: DataType.TEXT, allowNull: true })
    comment: string;
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
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;
    @BelongsTo(() => User)
    user: User;
}