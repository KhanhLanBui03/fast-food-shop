import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from './category.model';
import { ProductIngredient } from './product-ingredient.model';
import { Cart } from './cart.model';

@Table({ tableName: 'ingredients', timestamps: true })
export class Ingredient extends Model<Ingredient> {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  imageUrl!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description?: string;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  price!: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive!: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isFeatured!: boolean;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  categoryId!: number;

  // 💡 alias riêng biệt: 'category' (không cần 'ingredientCategory')
  @BelongsTo(() => Category, { as: 'category' })
  category!: Category;

  @HasMany(() => ProductIngredient)
  productIngredients?: ProductIngredient[];

  @HasMany(() => Cart)
  carts?: Cart[];
}
