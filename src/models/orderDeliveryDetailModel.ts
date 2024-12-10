//src/models/orderDeliveryDetailModel.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';  

class OrderDeliveryDetail extends Model {
  static associate(models: any) {
    this.belongsTo(models.OrderDispatchDetail, { foreignKey: 'orderDispatchId', as: 'orderDispatchDetail' });

  }
}

OrderDeliveryDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    deliveredTo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deliveredBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
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
    orderDispatchId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'OrderDispatchDetail',  
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'OrderDeliveryDetail',
    tableName: 'orderdeliverydetail',
    timestamps: true, 
  }
);

export default OrderDeliveryDetail;
