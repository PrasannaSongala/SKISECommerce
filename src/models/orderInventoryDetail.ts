import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';  

interface OrderInventoryDetailAttributes {
  id: number;
  inventoryUsed: number;
  inventoryWasted: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
  inventoryId?: number;
}

interface OrderInventoryDetailCreationAttributes 
extends Optional<OrderInventoryDetailAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class OrderInventoryDetail extends Model<OrderInventoryDetailAttributes, OrderInventoryDetailCreationAttributes> implements OrderInventoryDetailAttributes {
  public id!: number;
  public inventoryUsed!: number;
  public inventoryWasted!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public orderId?: number;
  public inventoryId?: number;
}

OrderInventoryDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    inventoryUsed: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
    inventoryWasted: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
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
    inventoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'inventorylist',  
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'orderinventorydetail',
    timestamps: true,
  }
);

export default OrderInventoryDetail;
