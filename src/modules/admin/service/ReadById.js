import { ManageStudentModel } from "../../../model/ManageStudentModel.js";

const getById = async (studenId) => {
  const findStudent = await ManageStudentModel.findOne({
    where: {
      id: studenId,
    },
  });
  if (!findStudent) {
    return;
  }
  return findStudent;
};

export default getById;
