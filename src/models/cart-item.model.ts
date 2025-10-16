import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from './product.model';
import { ProductVariants } from './product-variants.model';
import { Carts } from './carts.model';
import { Cart } from './cart.model';

@Table({tableName: 'cart_items', timestamps: true })
export class CartItem extends Model<CartItem> {
    @Column({ type: DataType.INTEGER, allowNull: false })
    quantity: number;

    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId: number;
    @BelongsTo(() => Product)
    product: Product

    @ForeignKey(() => ProductVariants)
    @Column({ type: DataType.INTEGER, allowNull: false })
    variantId: number;
    @BelongsTo(() => ProductVariants)
    variant: ProductVariants

    @ForeignKey(() => Carts)
    @Column({ type: DataType.INTEGER, allowNull: false })
    cartId: number;
    @BelongsTo(() => Carts)
    cart: Carts
    @HasMany(() => Cart)
    carts?:Cart[];
}