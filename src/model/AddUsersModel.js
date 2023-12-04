import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/index.js";

export class AddUsersModel extends Model {}

AddUsersModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Familiya: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ism: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Parol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Role: {
      type: DataTypes.STRING,
      defaultValue: "foydalanuvchi"
    }
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    tableName: "royxatga_olish"
  }
);

await sequelize.sync({alter: true})