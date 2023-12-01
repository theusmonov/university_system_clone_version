import { ManageStudentModel } from "../../../model/ManageStudentModel.js";
import bodyData from "../../../utils/bodyData.js";
import isInvalidData from "../../../utils/isInvalidData.js";

const createStudent = async (body, filename) => {
  const newDataObject = {};
  bodyData.forEach((e) => {
    newDataObject[e] = body[e];
  });
  if(isInvalidData(newDataObject)) {
    return;
  }
  newDataObject.TalabaRasmi = `/img/${filename}`;
  const result = await ManageStudentModel.create(newDataObject);
  return result;
};

export default createStudent;
