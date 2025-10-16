import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Order } from './order.model';

@Table({tableName:'addresses', timestamps:true})
export class Address extends Model<Address> {
  @Column({ type: DataType.STRING, allowNull: true })
  street: string;
  @Column({ type: DataType.STRING, allowNull: false})
  city: string;
  @Column({ type: DataType.STRING, allowNull: false})
  district: string;
  @Column({ type: DataType.STRING, allowNull: true})
  ward: string;
  @Column({ type: DataType.FLOAT, allowNull: false})
  longitude: number;
  @Column({ type: DataType.FLOAT, allowNull: false})
  latitude:number;
  @Column({ type: DataType.BOOLEAN, allowNull: true, defaultValue: false})
  isDefault:boolean;
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId:number;
  @BelongsTo(()=>User)
  user:User;
  @HasMany(() => Order)
  orders: Order[];
  
}