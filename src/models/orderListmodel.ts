import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class OrderList extends Model {
  static associate(models: any) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    this.belongsTo(models.Location, { foreignKey: 'locationId', as: 'location' });
    this.belongsTo(models.OrderList, { foreignKey: 'baseOrderId', as: 'baseOrder' });
  }
}

OrderList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    baseOrderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'OrderList',
        key: 'id',
      },
    },
    orderStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productCost: {
      type: DataTypes.DOUBLE,
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
    advanceTokenCost: {
      type: DataTypes.INTEGER,
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
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    totalCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    totalProduct: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gstin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aadhaar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferredPaymentMethod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    creditDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billingFullName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '0',
    },
    billingMobileNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '0',
    },
    billingLine1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billingLine2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billingPincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billingCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    billingState: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shippingFullName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '0',
    },
    shippingMobileNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '0',
    },
    shippingLine1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shippingLine2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shippingPincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    shippingCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shippingState: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    orderedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    orderedUpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    orderedAgreedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    paidAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    outForDeliveryAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deliveredAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    closedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    salesAgentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isInterStateDelivery: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    orderType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    interestPercentage: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    note: {
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
    userId: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    purchaseOrderNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    purchaseOrderDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Locations',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'OrderList',
    tableName: 'orderlist',
    timestamps: false,
  }
);

export default OrderList;
