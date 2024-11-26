import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database'; // Sequelize instance

class Inventory extends Model {
  public id!: number;
  public name!: string;
  public quantity!: number;
  public price!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
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
    tableName: 'inventory', // Table name in MySQL
    timestamps: false, // Optional: if you want to handle createdAt/updatedAt manually
  }
);

export default Inventory;
