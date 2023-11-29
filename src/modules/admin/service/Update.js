import { ManageStudentModel } from "../../../model/ManageStudentModel.js";
import isInvalidData from "../../../utils/isInvalidData.js";

const updateStudent = async (studentID, body) => {
  try {
    const bodyKeyDataUpdate = [
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

    if (isInvalidData(body)) {
      return;
    }

    const updatedStudentData = {};
    bodyKeyDataUpdate.forEach((key) => {
      if (body[key] !== undefined) {
        updatedStudentData[key] = body[key];
      }
    });
    const existStudent = await ManageStudentModel.findOne({where: {
      id: studentID
    }})
    if(!existStudent){
        return;
    }
   
    await existStudent.update(updatedStudentData);
    return existStudent;
  } catch (err) {
    console.error(
      "Talaba ma'lumotlarini yangilash xatolik service qismida",
      err
    );
  }
};

export default updateStudent;
