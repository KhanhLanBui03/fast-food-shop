import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from './product.model';
import { Product_variants } from './product_variants.model';
import { Carts } from './carts.model';
import { Cart } from './cart.model';

@Table
export class Cart_item extends Model<Cart_item> {
    @Column({ type: DataType.INTEGER, allowNull: false })
    quantity: number;

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

    @ForeignKey(() => Carts)
    @Column({ type: DataType.INTEGER, allowNull: false })
    cartId: number;
    @BelongsTo(() => Carts)
    cart: Carts
    @HasMany(() => Cart)
    carts?:Cart[];
}