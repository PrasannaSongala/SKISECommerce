//src/models/inventoryList.ts

import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../config/database';
import Brandlist from './brandlist';  
import CategoryTypes from './categorytypes'; 
import Locations from './locations';

class InventoryList extends Model {
  public id!: number;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public brandId!: number;
  public categoryId!: number;
  public locationId!: number;

  // Associations
  public static associations: {
    brand: Association<InventoryList, Brandlist>;
    category: Association<InventoryList, CategoryTypes>; 
    location: Association<InventoryList, Locations>;
  };
}

InventoryList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'inventorylist',
    timestamps: true,
  }
);

//  associations
InventoryList.belongsTo(Brandlist, { foreignKey: 'brandId', as: 'brand' });
InventoryList.belongsTo(CategoryTypes, { foreignKey: 'categoryId', as: 'category' });
InventoryList.belongsTo(Locations, { foreignKey: 'locationId', as: 'location' });

export default InventoryList;
