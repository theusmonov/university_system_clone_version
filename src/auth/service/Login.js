import bcrypt from "bcrypt";
import { AddUsersModel } from "../../model/AddUsersModel.js";
import jwt from "jsonwebtoken"

const loginUser = async (bodyData) => {
  const { Login, Parol } = bodyData;
  if (!Login || !Parol) {
    return { error: 'Login and Parol are required' };
  }

  const userFind = await AddUsersModel.findOne({
    where: {
      Login,
    },
  });

  if (!userFind) {
    return false;
  } else {
   const isValidPassword = await bcrypt.compare(Parol, userFind.Parol);
   if(!isValidPassword){
    return;
   } else {
    const token = jwt.sign({userId: userFind.id, role: userFind.Role}, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h"
    });
    return {token, isValidPassword};
   }
  }
};

export default loginUser;
