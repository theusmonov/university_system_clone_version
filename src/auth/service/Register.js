import { AddUsersModel } from "../../model/AddUsersModel.js";
import bodyDataAdmin from "../../utils/bodyDataAdmin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (bodyData) => {
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
  const token = jwt.sign(
    { userId: result.id, role: result.role },
    process.env.JWT_SECRET_KEY
  );
  return { result, token };
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
