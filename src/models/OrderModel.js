import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";
import Adress from "./AdressModel";
import Cupom from "./CupomModel";
import Payment from "./PaymentModel";
import User from "./UserModel";

const Order = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "criado",      
    },
    total: {
      type: DataTypes.NUMERIC,     
    },
    totalDiscount: {
      field: "total_discount",
      type: DataTypes.NUMERIC,
      allowNull: true,
      defaultValue: 0.00
    },    
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);
Order.belongsTo(User, {
  as: 'userCostumer',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idUserCostumer',
    allowNull: false,
    field: 'id_user_costumer'
  }
});

Order.belongsTo(User, {
  as:'UserDeliver',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idUserDeliver',
    allowNull: true,
    field: 'id_user_deliver'
  }
});

Order.belongsTo(Adress,{
  as: 'Adress',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idAdress',
    allowNull: true,
    field: 'id_adress'
  }
});

Order.belongsTo(Payment,{
  as: 'Payment',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idPayment',
    allowNull: false,
    field: 'id_Payment'
  }
})

Order.belongsTo(Cupom, {
  as: 'cupom',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idCupom',
    allowNull: true,
    field: 'id_cupom'
  }
})




export default Order;





