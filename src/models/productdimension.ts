// src/models/productdimension.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database'; 

class ProductDimension extends Model {
  id!: number;
  value!: string;
  createdAt!: Date;
  updatedAt!: Date;
  productDimensionId!: number;
  productId!: number;
}

ProductDimension.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    value: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    productDimensionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'productdimensions',
    timestamps: false, 
  }
);

export default ProductDimension;
