// models/orderDispatchDetailModel.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; 

class OrderDispatchDetail extends Model {
  static associate(models: any) {
    this.belongsTo(models.OrderList, {
      foreignKey: 'orderId',
      as: 'order',
    });
    //  OrderDispatchItem
    this.hasMany(models.OrderDispatchItem, {
      foreignKey: 'orderDispatchId',
      as: 'dispatchItems',
    });
  }
}

OrderDispatchDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    deliveryAgentName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deliveryAgentMobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ewayBillNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invoiceNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transportationCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    loadingCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    unloadingCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    cgst: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    sgst: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    igst: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    totalCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    interestCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    dispatchStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    creditDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoiceSent: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },
    outForDeliveryAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    creditDateDay: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'OrderList', 
        key: 'id',
      },
      allowNull: false,
    },
    placeOfDispatch: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transporter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lrNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    termsOfDelivery: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tcsCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'OrderDispatchDetail',
    tableName: 'orderdispatchdetail',
    timestamps: true, 
    underscored: true, 
  }
);

export default OrderDispatchDetail;
