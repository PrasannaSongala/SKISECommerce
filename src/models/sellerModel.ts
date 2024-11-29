// src/models/sellerModel.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

// Define the Seller model
class Seller extends Model {
  public id!: number; // Primary key (auto-increment)
  public name!: string; // Seller name
  public companyName!: string; // Company name
  public gstin!: string; // GSTIN
  public mobileNumber!: string; // Mobile number (unique)
  public emailId!: string; // Email ID (unique)
  public line1!: string; // Address line 1
  public line2!: string; // Address line 2
  public pincode!: number; // Pincode
  public city!: string; // City
  public state!: string; // State
  public alternateMobile!: string | null; // Optional alternate mobile number
  public isDisabled!: boolean; // Disabled status (0 or 1)
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
      allowNull: true, // optional field
    },
    isDisabled: {
      type: DataTypes.TINYINT, // Representing a boolean (0 or 1)
      defaultValue: 0, // Default value is 'not disabled'
    },
  },
  {
    sequelize,
    modelName: 'Seller',
    tableName: 'sellerlist', // Matches the table name
    timestamps: true, 
  }
);

export default Seller;
