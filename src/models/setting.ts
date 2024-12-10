import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Location from '../models/locations';  

class Setting extends Model {
  public id!: number;
  public name!: string;
  public value!: string | null;
  public note!: string | null;
  public updatedBy!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
  public locationId!: number | null;
}

Setting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.STRING(3000),
      allowNull: true,
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Location,
        key: 'id',
      },
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
    modelName: 'Setting',
    tableName: 'settings',
    timestamps: true,
  }
);

Setting.belongsTo(Location, { foreignKey: 'locationId', as: 'location' });

export default Setting;
