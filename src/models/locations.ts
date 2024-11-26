import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface LocationAttributes {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: number;
  latitude: number;
  longitude: number;
  isDefault: boolean;
}

interface LocationCreationAttributes extends Optional<LocationAttributes, 'id'> {}

class Location extends Model<LocationAttributes, LocationCreationAttributes> implements LocationAttributes {
  public id!: number;
  public name!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public pincode!: number;
  public latitude!: number;
  public longitude!: number;
  public isDefault!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    pincode: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(20, 12),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(20, 12),
      allowNull: true,
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'locations',
  }
);

export default Location;
