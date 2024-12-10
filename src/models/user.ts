// src/models/user.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; 

// Define the User model
export class User extends Model {
  id!: string;
  mobileNumber!: string;
  fullName!: string;
  roleId!: string;
  isMobileConfirmed!: boolean;
  isDeleted!: boolean;
  createdBy!: string;
  updatedBy!: string;
  deletedBy!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

// Initialize the model with appropriate fields
User.init(
  {   
    id: {
      type: DataTypes.STRING(36),  
      primaryKey: true,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING(10),  
      allowNull: true,
      defaultValue: '0',
    },
    fullName: {
      type: DataTypes.STRING(255),  
      allowNull: true,
      defaultValue: '0',
    },
    roleId: {
      type: DataTypes.STRING(255),  
      allowNull: true,
      defaultValue: '0',
    },
    isMobileConfirmed: {
      type: DataTypes.BOOLEAN,  
      allowNull: true,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,  
      defaultValue: false,
    },
    createdBy: {
      type: DataTypes.STRING(255),  
      allowNull: true,
      defaultValue: '0',
    },
    updatedBy: {
      type: DataTypes.STRING(255),  
      allowNull: true,
      defaultValue: '0',
    },
    deletedBy: {
      type: DataTypes.STRING(255),  
      allowNull: true,
      defaultValue: '0',
    },
    createdAt: {
      type: DataTypes.DATE,  
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,  
      allowNull: false,
    },
  },
  {
    sequelize,  
    modelName: 'User',  
    tableName: 'user',  
    timestamps: false, 
  }
);


// Create a new user
export const createUser = async (userData: any) => {
  const user = await User.create(userData);
  return user;
};

// Get all users
export const getAllUsers = async () => {
  const users = await User.findAll({
    where: { isDeleted: false },  
  });
  return users;
};

// Get user by ID
export const getUserById = async (id: string) => {
  const user = await User.findOne({
    where: { id, isDeleted: false },
  });
  return user;
};

// Update user by ID
export const updateUser = async (id: string, updateData: any) => {
  const user = await User.update(updateData, {
    where: { id },
    returning: true,  
  });
  return user[1][0];  
};

// Soft delete user
export const deleteUser = async (id: string, deletedBy: string, deletedAt: string) => {
  const result = await User.update(
    { isDeleted: true, deletedBy, deletedAt },
    { where: { id } }
  );
  return result[0] > 0;  
};
