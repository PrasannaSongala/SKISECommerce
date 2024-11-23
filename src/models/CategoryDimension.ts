import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Attributes of the CategoryDimension model
interface CategoryDimensionAttributes {
  id: number;
  dimensionId: string;
  createdAt?: Date;
  updatedAt?: Date;
  categoryId: number;
}

// Creation attributes when a new CategoryDimension is created
interface CategoryDimensionCreationAttributes
  extends Optional<CategoryDimensionAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class CategoryDimension
  extends Model<CategoryDimensionAttributes, CategoryDimensionCreationAttributes>
  implements CategoryDimensionAttributes
{
  public id!: number;
  public dimensionId!: string;
  public categoryId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CategoryDimension.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dimensionId: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'categorydimension',
    timestamps: true,
  }
);

export default CategoryDimension;
