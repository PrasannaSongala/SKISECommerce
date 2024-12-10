import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database'; 

interface OrderInvoiceDetailAttributes {
  invoiceId: number;
  ewayBillNumber?: string;
  invoiceSent?: boolean;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
  doNumber?: string;
}

interface OrderInvoiceDetailCreationAttributes 
extends Optional<OrderInvoiceDetailAttributes, 'invoiceId'> {}

class OrderInvoiceDetail 
extends Model<OrderInvoiceDetailAttributes, OrderInvoiceDetailCreationAttributes> implements OrderInvoiceDetailAttributes {
  public invoiceId!: number;
  public ewayBillNumber?: string;
  public invoiceSent?: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
  public orderId?: number;
  public doNumber?: string;
}

OrderInvoiceDetail.init(
  {
    invoiceId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ewayBillNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invoiceSent: {
      type: DataTypes.BOOLEAN,
      allowNull: true, // or false, 
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
      allowNull: true,
      references: {
        model: 'orderlist', 
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    doNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'orderinvoicedetail',
    timestamps: true, 
  }
);

export default OrderInvoiceDetail;
