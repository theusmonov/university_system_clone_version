import { ManageStudentModel } from "../../../model/ManageStudentModel.js";
import bodyData from "../../../utils/bodyData.js";
import isInvalidData from "../../../utils/isInvalidData.js";

const updateStudent = async (studentID, body) => {
    if (isInvalidData(body)) {
      return;
    }
    const updatedStudentData = {};
    bodyData.forEach((key) => {
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
  } 


export default updateStudent;
