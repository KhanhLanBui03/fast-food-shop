import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Category } from './category.model';
import { ProductVariants } from './product-variants.model';
import { ProductIngredient } from './product-ingredient.model';
import { OrderItem } from './order-item.model';
import { CartItem } from './cart-item.model';
import { Review } from './review.model';

@Table({ tableName: 'products', timestamps: true })
export class Product extends Model<Product> {

    @Column({ type: DataType.STRING, allowNull: false })
    name!: string;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    slug!: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    description?: string;

    @Column({ type: DataType.FLOAT, allowNull: false })
    basePrice!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    imageUrl!: string;

    @Column({ type: DataType.BOOLEAN, defaultValue: true, allowNull: true })
    isActive?: boolean;

    @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: true })
    isFeatured?: boolean;

    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER, allowNull: false })
    categoryId!: number;

    @BelongsTo(() => Category)
    category!: Category;
    @HasMany(() => ProductVariants)
    product_variants?: ProductVariants[];

    @HasMany(() => ProductIngredient)
    product_ingredients?: ProductIngredient[];
    @HasMany(() => OrderItem)
    orderItems: OrderItem[];

    @HasMany(() => CartItem)
    cartItems: CartItem[];
    @HasMany(() => Review)
    reviews: Review[];

}
