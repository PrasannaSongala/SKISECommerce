//src/models/InventoryTransaction.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Sellerlist from './sellerlist';  
import InventoryList from './inventoryList';  

class InventoryTransaction extends Model {
  
}

InventoryTransaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inventoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    remainingQuantity: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    productCost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    transportationCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    loadingCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    unloadingCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    sgstCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    cgstCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    igstCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    otherCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    totalCost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    inventoryUsed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'InventoryTransaction',
    tableName: 'inventorytransaction',
    timestamps: true,
  }
);

//  associations
InventoryTransaction.belongsTo(Sellerlist, {
  foreignKey: 'sellerId',
  as: 'seller',  
});
InventoryTransaction.belongsTo(InventoryList, {
  foreignKey: 'inventoryId',
  as: 'inventory',  
});

export default InventoryTransaction;
