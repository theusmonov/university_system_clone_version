import { AddUsersModel } from "../../model/AddUsersModel.js";
import bodyDataUser from "../../utils/bodyDataUsers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (bodyData) => {
  const newObjectDataAdmin = {};
  const hashPassword = await bcrypt.hash(bodyData.Parol, 10);
  bodyDataUser.forEach((e) => {
    if (e === "Parol") {
      newObjectDataAdmin[e] = hashPassword;
    } else {
      newObjectDataAdmin[e] = bodyData[e];
    }
  });

  const result = await AddUsersModel.create(newObjectDataAdmin);
  return result;
};


const registerAdmin = async (bodyData) => {
  const newObjectDataAdmin = {};
  const hashPassword = await bcrypt.hash(bodyData.Parol, 10);
  bodyDataAdmin.forEach((e) => {
    if (e === "Parol") {
      newObjectDataAdmin[e] = hashPassword;
    } else {
      newObjectDataAdmin[e] = bodyData[e];
    }
  });
  newObjectDataAdmin.Role = "admin";

  const result = await AddUsersModel.create(newObjectDataAdmin);
  const token = jwt.sign(
    { userId: result.id, role: result.Role},
    process.env.JWT_SECRET_KEY
  );
  return { result, token };
};

export { registerAdmin, registerUser };
