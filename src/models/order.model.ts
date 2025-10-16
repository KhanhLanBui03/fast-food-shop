import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Address } from './address.model';
import { OrderItem } from './order-item.model';
import { Review } from './review.model';
export enum OrderStatus {
    PENDING = 'Đang chờ',
    CONFIRMED = 'Đã xác nhận',
    PREPARING = 'Đang chuẩn bị',
    READY = 'Sẵn sàng',
    DELIVERED = 'Đã giao hàng',
    CANCELED = 'Đã hủy',
}
export enum PaymentStatus {
    PENDING = 'Đang chờ',
    PAID = 'Đã thanh toán',
    FAILED = 'Thanh toán thất bại',
    REFUNDED = 'Hoàn tiền',
}
export enum PaymentMethod {
    COD = 'Thanh toán khi giao hàng',
    ONLINE = 'Thanh toán Online',
}

@Table({ tableName: 'orders', timestamps: true })
export class Order extends Model<Order> {
    @Column({ type: DataType.STRING, allowNull: false })
    orderNumber!: string;

    @Column({
        type: DataType.ENUM(...Object.values(OrderStatus)),
        allowNull: false,
        defaultValue: OrderStatus.PENDING,
    })
    status: OrderStatus;
    @Column({
        type: DataType.ENUM(...Object.values(PaymentStatus)),
        allowNull: false,
    })
    paymentStatus: PaymentStatus;
    @Column({
        type: DataType.ENUM(...Object.values(PaymentMethod)),
        allowNull: false,
    })
    paymentMethod: PaymentMethod;
    @Column({ type: DataType.INTEGER, allowNull: true })
    subTotal: number;
    @Column({ type: DataType.INTEGER, allowNull: true })
    deliveryFee: number;
    @Column({ type: DataType.INTEGER, allowNull: true })
    discount: number;
    @Column({ type: DataType.INTEGER, allowNull: true })
    total: number;
    @Column({ type: DataType.TEXT, allowNull: true })
    notes: string;
    @ForeignKey(() => User)
    @Column({type:DataType.INTEGER, allowNull:false})
    userId:number;
    @BelongsTo (() => User)
    user:User;
    @ForeignKey(() => Address)
    @Column({ type: DataType.INTEGER, allowNull: false })
    addressId:number;
    @BelongsTo (() => Address)
    address:Address;
    @HasMany(() => OrderItem)
    orderItems: OrderItem[];
    @HasMany(() => Review)
    reviews: Review[];



}