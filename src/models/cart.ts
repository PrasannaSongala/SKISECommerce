//src/models/cart.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { ProductList } from './product';
import { User } from './user';

export class Cart extends Model {
  id!: number;
  quantity?: number;
  quantityUnit?: string;
  createdAt!: Date;
  updatedAt!: Date;
  productId?: number;
  userId?: string;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    quantityUnit: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductList,
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.STRING(36),
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Cart',
    tableName: 'cart',
    timestamps: false,
  }
);

Cart.belongsTo(ProductList, { foreignKey: 'productId', as: 'product' });
Cart.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Cart;
