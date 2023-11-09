import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

class AdminCreateStudentModel extends Model {}

AdminCreateStudentModel.init(
  {
    "F.I.SH": {
      type: DataTypes.STRING,
      allowNull: false
    },
    "Tug'ilgan_sanasi": {
      type: DataTypes.STRING,
      allowNull: false
    },
    Jinsi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Manzil: {
      type: DataTypes.STRING,
      allowNull: false
    },
    "Manzil(vaqtincha)": {
      type: DataTypes.STRING,
      allowNull:false
    },
    "Yo'nalish": {
      type: DataTypes.STRING,
      allowNull: false
    },
    "O'qish_tili": {
      type: DataTypes.STRING,
      allowNull: false
    },
    Darajasi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    "Ta'lim_shakli" : {
      type: DataTypes.STRING,
      allowNull: false
    },
    Kurs: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Guruh: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tyutor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Stipendiya: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Qabul_turi: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    tableName: "Talaba_Ma'lumotlari"
  }
);

await sequelize.sync({alter: true})
