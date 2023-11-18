import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export class AdminCreateStudentModel extends Model {}

AdminCreateStudentModel.init(
  {
    FISh: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TugilganSanasi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Jinsi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Manzil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ManzilVaqtincha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Yonalish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    OqishTili: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Darajasi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TalimShakli: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Kurs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Guruh: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Tyutor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Stipendiya: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Qabul_turi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    tableName: "talaba_malumoti",
  }
);


await sequelize.sync({alter: true})  
