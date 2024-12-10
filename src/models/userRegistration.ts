import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface UserRegistrationAttributes {
  id: number;
  mobileNumber: string;
  otp: number | null;
  numberOfOtpSent: number;
  numberOfOtpTried: number;
  createdAt: Date;
  updatedAt: Date;
}

// optional attributes for creation
interface UserRegistrationCreationAttributes 
extends Optional<UserRegistrationAttributes, 'id' | 'otp'> {}

//  model
class UserRegistration extends Model<UserRegistrationAttributes, UserRegistrationCreationAttributes>
  implements UserRegistrationAttributes {
  public id!: number;
  public mobileNumber!: string;
  public otp!: number | null;
  public numberOfOtpSent!: number;
  public numberOfOtpTried!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

UserRegistration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    mobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    numberOfOtpSent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    numberOfOtpTried: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
  },
  {
    sequelize,
    tableName: 'userregistration',
    timestamps: true,
  }
);

export default UserRegistration;
