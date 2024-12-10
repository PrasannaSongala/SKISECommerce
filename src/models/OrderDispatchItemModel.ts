// src/models/OrderDispatchItemModel.ts

import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/database';
import OrderItem from './orderitem';  
import OrderDispatchDetail from '../models/orderDispatchDetailModel';

class OrderDispatchItem extends Model {
  public id!: number;
  public quantity!: number;
  public quantityWasted!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public orderItemId!: number | null;
  public orderDispatchId!: number | null;

  static associate(models: any) {
    OrderDispatchItem.belongsTo(models.OrderItem, {
      foreignKey: 'orderItemId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    OrderDispatchItem.belongsTo(models.OrderDispatchDetail, {
      foreignKey: 'orderDispatchId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

OrderDispatchItem.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantityWasted: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    orderItemId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    orderDispatchId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'orderdispatchitem',
    timestamps: true,  
    indexes: [
      { fields: ['orderItemId'] },
      { fields: ['orderDispatchId'] },
    ],
  }
);

export default OrderDispatchItem;
