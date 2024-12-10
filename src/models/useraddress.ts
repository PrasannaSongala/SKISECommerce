// src/models/userAddress.ts
import { Sequelize, Model, DataTypes } from 'sequelize';
import db from '../config/database'; 
import { User } from './user'; 

// Define the UserAddress model
class UserAddress extends Model {
  public id!: number;
  public fullName!: string;
  public mobileNumber!: string;
  public line1!: string;
  public line2!: string;
  public pincode!: string;
  public city!: string;
  public state!: string;
  public createdAt!: string;
  public updatedAt!: string;
  public userId!: string; // User's UUID
}

// Initialize the model
UserAddress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    fullName: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    line1: DataTypes.STRING,
    line2: DataTypes.STRING,
    pincode: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING,
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id', //  User has `id` field
      },
    },
  },
  {
    sequelize: db,
    tableName: 'useraddress',
    timestamps: true, 
  }
);

// Define associations
UserAddress.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(UserAddress, { foreignKey: 'userId' });

export { UserAddress };
