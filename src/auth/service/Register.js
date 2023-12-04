import { AddUsersModel } from "../../model/AddUsersModel.js";
import bodyDataAdmin from "../../utils/bodyDataAdmin.js";
import bcrypt from "bcrypt";

const register = async (bodyData) => {
  const newObjectDataAdmin = {};
  const hashPassword = await bcrypt.hash(bodyData.Parol, 10);
  bodyDataAdmin.forEach((e) => {
    if (e === "Parol") {
      newObjectDataAdmin[e] = hashPassword;
    } else {
      newObjectDataAdmin[e] = bodyData[e];
    }
  });

  const result = await AddUsersModel.create(newObjectDataAdmin);
  return result;
};

export default register;
