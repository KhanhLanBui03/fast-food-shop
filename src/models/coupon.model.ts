import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { UserCoupon } from './user_coupon.model';
export enum TypeCoupons {
    FIXED = 'FIXED',
    PERCENTAGE = 'PERCENTAGE',
}
@Table
export class Coupon extends Model<Coupon> {
    @Column({ type: DataType.STRING, allowNull: false })
    code: string;
    @Column({ type: DataType.FLOAT, allowNull: false })
    name: string;
    @Column({ type: DataType.TEXT, allowNull: true })
    description: string;
    @Column({
        allowNull: false,
        type: DataType.ENUM(...Object.values(TypeCoupons))
    })
    type: boolean;
    @Column({ type: DataType.INTEGER, allowNull: false })
    value: number;
    @Column({ type: DataType.INTEGER, defaultValue: 0, allowNull: true })
    minOrderAmount: number;
    @Column({ type: DataType.INTEGER, defaultValue: 1, allowNull: true })
    maxUsers: number;
    @Column({ type: DataType.INTEGER, defaultValue: 0, allowNull: true })
    currentUsers: number;
    @Column({ type: DataType.DATE, allowNull: false })
    validFrom: Date;
    @Column({ type: DataType.DATE, allowNull: false })
    validTo: Date;
    @Column({ type: DataType.BOOLEAN, defaultValue: true, allowNull: true })
    isActive: boolean;
    @HasMany(() => UserCoupon)
    userCoupons: UserCoupon[];

}