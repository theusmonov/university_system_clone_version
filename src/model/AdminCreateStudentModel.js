import { DataTypes, Model, Sequelize } from "sequelize";

class AdminCreateStudentmodel extends Model {}

AdminCreateStudentmodel.init(
  {
    guruh_raqami: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    talaba_ismi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    talaba_familiyasi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    talaba_qabul_yili: {
      type: DataTypes.STRING,
      allowNull: false
    },
    talim_darajasi: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'bakalavr',
    },
    talim_shakli: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {}
);
