import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Coupon } from './coupon.model';



@Table
export class UserCoupon extends Model<UserCoupon> {
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isUsed: boolean;
  @Column({ type: DataType.DATE, allowNull: true })
  usedAt: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userId: number;
  @BelongsTo(() => User)
  user: User;
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  couponId: number;
  @BelongsTo(() => Coupon)
  coupon: Coupon;


}