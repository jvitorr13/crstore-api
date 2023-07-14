import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";

const Category = sequelize.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(6000),
    },
    caminho: {
      type: DataTypes.STRING
    },
    icone: {
      type: DataTypes.STRING
    }
  },
  
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
);

export default Category