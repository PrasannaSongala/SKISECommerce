import { DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Import sequelize instance

const CategoryTypes = sequelize.define('CategoryTypes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  displayRate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  primaryDimension: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isDisabled: {
    type: DataTypes.TINYINT,
    defaultValue: 0, // 0 = Active, 1 = Disabled
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default CategoryTypes;
