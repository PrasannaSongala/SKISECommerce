import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';  

class OrderItem extends Model {
  static associate(models: any) {
    this.hasMany(models.OrderDispatchItem, { foreignKey: 'orderItemId', as: 'dispatchItems' });
  }
  
  public id!: number;
  public quantity!: number;
  public quantityUnit!: string;
  public primaryRate!: number;
  public cgstPercent!: number;
  public igstPercent!: number;
  public sgstPercent!: number;
  public conversionRatio!: number | null;
  public createdAt!: Date;
  public updatedAt!: Date;
  public productId!: number | null;
  public orderId!: number | null;
}

OrderItem.init(
  {
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantityUnit: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    primaryRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cgstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    igstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sgstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    conversionRatio: {
      type: DataTypes.FLOAT,
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productlist', 
        key: 'id',
      },
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orderlist',  
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'orderitem',
    timestamps: true,
  }
);

export default OrderItem;
