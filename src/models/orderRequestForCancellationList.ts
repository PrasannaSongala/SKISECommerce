import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';  

interface OrderRequestForCancellationListAttributes {
  id: number;
  reason: string | null;
  active: boolean | null;
  rejected: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;  // foreign key
}

interface OrderRequestForCancellationListCreationAttributes 
extends Optional<OrderRequestForCancellationListAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class OrderRequestForCancellationList 
extends Model<OrderRequestForCancellationListAttributes, OrderRequestForCancellationListCreationAttributes> implements OrderRequestForCancellationListAttributes {
  public id!: number;
  public reason!: string | null;
  public active!: boolean | null;
  public rejected!: boolean | null;
  public createdAt!: Date;
  public updatedAt!: Date;
  public orderId?: number;
}

OrderRequestForCancellationList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    rejected: {
      type: DataTypes.TINYINT,
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
      allowNull: true,
      references: {
        model: 'orderlist',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'orderrequestforcancellationlist',
    timestamps: true,
  }
);

export default OrderRequestForCancellationList;
