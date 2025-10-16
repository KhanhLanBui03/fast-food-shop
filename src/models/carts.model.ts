import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Cart_item } from './cart_item.model';

@Table
export class Carts extends Model<Carts> {
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId:number;
    @BelongsTo(() => User)
    user: User;
    @HasMany(() => Cart_item)
    cartItems: Cart_item[];
}