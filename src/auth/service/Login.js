import bcrypt from "bcrypt";
import { AddUsersModel } from "../../model/AddUsersModel.js";


const login = async (bodyData) => {
  const { Login, Parol } = bodyData;

  const admin = await AddUsersModel.findOne({
    where: {
      Login,
    },
  });
  if(!admin){
    return;
  }
  const isValidParol = await bcrypt.compare(Parol, admin.Parol)
  if(!isValidParol){
    return;
  }
  return admin; 
};

export default login;
