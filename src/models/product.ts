import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Corrected import

class Product extends Model {
  id!: number;
  name!: string;
  imageLink!: string;
  description!: string;
  primaryRate!: number;
  cgstPercent!: number;
  igstPercent!: number;
  sgstPercent!: number;
  conversionRatio!: number;
  hsnCode!: string;
  isDeleted!: boolean;
  isDisabled!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  categoryId!: number;
  brandId!: number;
  inventoryId!: number;
  locationId!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    imageLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    primaryRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cgstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    igstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sgstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    conversionRatio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    hsnCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.TINYINT,
      defaultValue: 0, // Defaults to 0 (not deleted)
      allowNull: false,
    },
    isDisabled: {
      type: DataTypes.TINYINT,
      defaultValue: 0, // Defaults to 0 (enabled)
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW'), // Corrected to use sequelize.fn('NOW')
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW'), // Corrected to use sequelize.fn('NOW')
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inventoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize, // Sequelize instance
    modelName: 'Product',
    tableName: 'productlist',
    timestamps: false, // Disable automatic timestamp handling if you prefer manual control
  }
);

export default Product;
