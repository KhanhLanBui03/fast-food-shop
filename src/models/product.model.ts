import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Category } from './category.model';
import { Product_variants } from './product_variants.model';
import { Product_ingredient } from './product_ingredient.model';
import { Order_item } from './order_item.model';
import { Cart_item } from './cart_item.model';
import { Review } from './review.model';

@Table
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
    @HasMany(() => Product_variants)
    product_variants?: Product_variants[];

    @HasMany(() => Product_ingredient)
    product_ingredients?: Product_ingredient[];
    @HasMany(() => Order_item)
    orderItems: Order_item[];

    @HasMany(() => Cart_item)
    cartItems: Cart_item[];
    @HasMany(() => Review)
    reviews: Review[];

}
