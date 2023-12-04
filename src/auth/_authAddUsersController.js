import login from "./service/Login.js";
import { registerAdmin, registerUser } from "./service/Register.js";






class AddUsersController {

  USER_REGISTER = async (req, res) => {
    try {
        const adminData = req.body
        const userRegister = await registerUser(adminData);
        return res.status(200).json({data: userRegister, message: "Register buldi"})
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  };


  USER_LOGIN = async (req, res) => {
    try {
      const  adminData = req.body
      const adminLogin = await login(adminData)
      return res.status(200).json("Login buldi")
    } catch (err) {
      return res.status(500).json({err: err.message})
    }
  };


  ADMIN_REGISTER = async (req, res) => {
    try {
        const adminData = req.body
        const adminRegister = await registerAdmin(adminData);
        return res.status(200).json({data: adminRegister, message: "Register buldi"})
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  };
};






export default new AddUsersController();
