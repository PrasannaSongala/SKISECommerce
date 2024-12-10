//src/models/Brandlist.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Brandlist extends Model {
  public id!: number;
  public name!: string;
  public link!: string | null;
  public type!: string | null;
  public isDisabled!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Brandlist.init(
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
    link: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    isDisabled: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
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
    tableName: 'brandlist',
  }
);

export default Brandlist;
