import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; 

// Define the ProductList model
export class ProductList extends Model {
  id!: number;
  name!: string;
  imageLink?: string;
  description?: string;
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
  categoryId?: number;
  brandId?: number;
  inventoryId?: number;
  locationId?: number;
}

ProductList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
      defaultValue: 1,
      allowNull: true,
    },
    hsnCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDisabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categorytypes',
        key: 'id',
      },
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'brandlist',
        key: 'id',
      },
    },
    inventoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'inventorylist',
        key: 'id',
      },
    },
    locationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'locations',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'ProductList',
    tableName: 'productlist',
    timestamps: false,
  }
);

export default ProductList;


