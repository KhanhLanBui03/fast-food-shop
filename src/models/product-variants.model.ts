import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { ProductIngredient } from './product-ingredient.model';
import { Product } from './product.model';
import { OrderItem } from './order-item.model';
import { CartItem } from './cart-item.model';
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
@Table({ tableName: 'product_variants', timestamps: true })
export class ProductVariants extends Model<ProductVariants> {
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
    @HasMany(() => OrderItem)
    orderItems: OrderItem[];
    @HasMany(() => CartItem)
    cartItems: CartItem[];



}