import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class CategoryTypes extends Model {
  public id!: number;
  public type!: string;
  public name!: string;
  public displayRate!: number;
  public primaryDimension?: string;
  public imageUrl?: string;
  public isDisabled!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

CategoryTypes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true, 
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    displayRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    primaryDimension: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isDisabled: {
      type: DataTypes.TINYINT,
      defaultValue: 0, // Default value 0 (Active)
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'categorytypes',
    timestamps: true,
  }
);

export default CategoryTypes;
