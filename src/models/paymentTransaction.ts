import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';  
import OrderList from './orderListmodel'; 

interface PaymentTransactionAttributes {
  id: number;
  amount: number | null;
  paymentDate: Date | null;
  updatedBy: string | null;
  paymentMode: string | null;
  transactionCredit: boolean | null;  
  transactionNumber: string | null;
  isDeleted: boolean; 
  createdAt: Date;
  updatedAt: Date;
  orderId: number | null;
}

interface PaymentTransactionCreationAttributes
  extends Optional<PaymentTransactionAttributes, 'id'> {}

class PaymentTransaction extends Model<
  PaymentTransactionAttributes,
  PaymentTransactionCreationAttributes
> {
  public id!: number;
  public amount!: number | null;
  public paymentDate!: Date | null;
  public updatedBy!: string | null;
  public paymentMode!: string | null;
  public transactionCredit!: boolean | null;
  public transactionNumber!: string | null;
  public isDeleted!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
  public orderId!: number | null;
}

// Define the model
PaymentTransaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    paymentMode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    transactionCredit: {
      type: DataTypes.TINYINT, // 0 for false, 1 for true
      allowNull: true,
    },
    transactionNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.TINYINT, 
      defaultValue: 0,
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
        model: 'orderlist', 
        key: 'id',
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'paymenttransactions',
  }
);

//  foreign key relationship
PaymentTransaction.belongsTo(OrderList, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
});

//  the reverse relationship:
OrderList.hasMany(PaymentTransaction, {
  foreignKey: 'orderId',
});

export default PaymentTransaction;
