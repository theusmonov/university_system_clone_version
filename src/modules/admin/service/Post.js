import { AdminCreateStudentModel } from "../../../model/AdminCreateStudentModel.js";
import isInvalidData from "../../../utils/isInvalidData.js";

const createStudent = async (body, filename) => {
  try {
    const bodyKeyData = [
      "TalabaRasmi",
      "FISh",
      "TugilganSanasi",
      "Jinsi",
      "Manzil",
      "ManzilVaqtincha",
      "Yonalish",
      "OqishTili",
      "Darajasi",
      "TalimShakli",
      "Kurs",
      "Guruh",
      "Tyutor",
      "Stipendiya",
      "Qabul_turi",
    ];

    const newKeyObject = {};
    for (const data of bodyKeyData) {
      newKeyObject[data] = data === "TalabaRasmi" ? `/img/${filename}`: body[data];
    }

    if (isInvalidData(body)) {
      return;
    }

    const createdStudentData = await AdminCreateStudentModel.create(
      newKeyObject
    );

    return createdStudentData;
  } catch (err) {
    console.error("Xatolik talaba ma'lumotlarini yaratishda", err);
  }
};

export default createStudent;
