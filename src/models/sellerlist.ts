// src/models/sellerModel.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Seller extends Model {
  public id!: number; 
  public name!: string; 
  public companyName!: string; 
  public gstin!: string; 
  public mobileNumber!: string; 
  public emailId!: string; 
  public line1!: string; 
  public line2!: string; 
  public pincode!: number; 
  public city!: string; 
  public state!: string; 
  public alternateMobile!: string | null; 
  public isDisabled!: boolean; 
  public createdAt!: Date; 
  public updatedAt!: Date; 
}

Seller.init(
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
    companyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gstin: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    emailId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    line1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    line2: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    alternateMobile: {
      type: DataTypes.STRING(255),
      allowNull: true, 
    },
    isDisabled: {
      type: DataTypes.TINYINT, 
      defaultValue: 0, 
    },
  },
  {
    sequelize,
    modelName: 'Seller',
    tableName: 'sellerlist', 
    timestamps: true, 
  }
);

export default Seller;
