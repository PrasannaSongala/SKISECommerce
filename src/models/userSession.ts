//src/models/userSession.ts

import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { User } from './user';

// UserSessionAttributes interface
interface UserSessionAttributes {
  sid: string;
  expires: Date;
  data: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface UserSessionCreationAttributes
  extends Optional<UserSessionAttributes, 'sid'> {}

export class UserSession
  extends Model<UserSessionAttributes, UserSessionCreationAttributes>
  implements UserSessionAttributes
{
  public sid!: string;
  public expires!: Date;
  public data!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public userId!: string;
}

UserSession.init(
  {
    sid: {
      type: DataTypes.STRING(255),
      primaryKey: true,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data: {
      type: DataTypes.TEXT,
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
    userId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'usersession',
    timestamps: false,
  }
);

UserSession.belongsTo(User, { foreignKey: 'userId', as: 'user' });
