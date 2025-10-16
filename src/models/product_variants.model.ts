import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Product_ingredient } from './product_ingredient.model';
import { Product } from './product.model';
import { Order_item } from './order_item.model';
import { Cart_item } from './cart_item.model';
export enum Size {
    SMALL = '15cm',
    MEDIUM = '20cm',
    LARGE = '30cm',
}
export enum Type {
    THIN = 'Mỏng',
    REGULAR = 'Thường',
    THICK = 'Dày',
}
@Table
export class Product_variants extends Model<Product_variants> {
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;
    @Column({
        type: DataType.ENUM(...Object.values(Size)),
        allowNull: false,
        defaultValue: Size.MEDIUM,
    })
    size: Size;
    @Column({
        type: DataType.ENUM(...Object.values(Type)),
        allowNull: false,
        defaultValue: Type.THIN,
    })
    type: Type;
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    modifiedPrice: number;
    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
    isActive: boolean;
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId: number;
    @BelongsTo(() => Product)
    product: Product;
    @HasMany(() => Order_item)
    orderItems: Order_item[];
    @HasMany(() => Cart_item)
    cartItems: Cart_item[];



}