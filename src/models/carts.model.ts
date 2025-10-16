import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { CartItem } from './cart-item.model';

@Table({ tableName: 'carts', timestamps: true })
export class Carts extends Model<Carts> {
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId:number;
    @BelongsTo(() => User)
    user: User;
    @HasMany(() => CartItem)
    cartItems: CartItem[];
}