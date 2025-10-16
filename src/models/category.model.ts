import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from './product.model';
import { Ingredient } from './ingredient.model';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model<Category> {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ allowNull: false, type: DataType.STRING, unique: true })
  slug!: string;

  @Column({ allowNull: true, type: DataType.TEXT })
  description?: string;

  @Column({ allowNull: true, defaultValue: 0, type: DataType.INTEGER })
  sortOrder?: number;

  @Column({ allowNull: true, defaultValue: true, type: DataType.BOOLEAN })
  isActive?: boolean;

  // 🧩 Quan hệ
  @HasMany(() => Product, { as: 'products' })
  products?: Product[];

  @HasMany(() => Ingredient, { as: 'ingredients' })
  ingredients?: Ingredient[];
}
