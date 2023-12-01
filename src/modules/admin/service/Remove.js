import { ManageStudentModel } from "../../../model/ManageStudentModel.js";

const deleteStudent = async (studenId) => {
  const delStudent = await ManageStudentModel.findOne({
    where: {
      id: studenId,
    },
  });
  if (!delStudent) {
    return false;
  }
  await delStudent.destroy();
  return true;
};

export default deleteStudent;
