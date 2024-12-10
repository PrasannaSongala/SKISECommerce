import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import { User } from './user';


interface UserLoginAttributes {
  userName: string;
  password?: string;
  salt?: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string; 
}

// Define a creation interface
interface UserLoginCreationAttributes extends Optional<UserLoginAttributes, 'password' | 'salt' | 'userId'> {}

// Extend the Sequelize Model
export class UserLogin extends Model<UserLoginAttributes, UserLoginCreationAttributes> implements UserLoginAttributes {
  public userName!: string;
  public password?: string;
  public salt?: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public userId?: string;

}

// Initialize the model
UserLogin.init(
  {
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.CHAR(128),
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING(100),
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
    userId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'UserLogin',
    tableName: 'userlogin',
    timestamps: true, 
    underscored: false, 
  }
);


UserLogin.belongsTo(User, { foreignKey: 'userId' });

export default UserLogin;
