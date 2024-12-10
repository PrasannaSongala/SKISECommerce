import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database'; 
import { User } from './user'; 

export class UserDetail extends Model {}

UserDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userType: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    gstin: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pan: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    aadhaar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    emailId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    line1: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    line2: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    alternateMobile: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    defaultAddressId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
    },
    enableSMS: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    enableWhatsApp: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'UserDetail',
    tableName: 'userdetail',
  }
);

// foreign key relationship
UserDetail.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasOne(UserDetail, { foreignKey: 'userId', as: 'userDetail' });
