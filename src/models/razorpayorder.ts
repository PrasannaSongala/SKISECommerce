// models/razorpayorder.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database'; 
import OrderList from './orderListmodel';

export class RazorpayOrder extends Model {
  public id!: number;
  public amount!: number;
  public currency!: string;
  public razorpayOrderId!: string;
  public extraInfo!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
  public orderId!: number;
}

RazorpayOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(4),
      defaultValue: 'INR',
      allowNull: false,
    },
    razorpayOrderId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    extraInfo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: OrderList, // Foreign key to the orderlist table
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'razorpayorder',
    timestamps: true,
  }
);

RazorpayOrder.belongsTo(OrderList, { foreignKey: 'orderId' }); 

export default RazorpayOrder; 
