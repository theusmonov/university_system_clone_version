import login from "./service/Login.js";
import register from "./service/Register.js";




class AddUsersController {


  REGISTER = async (req, res) => {
    try {
        const adminData = req.body
        const adminRegister = await register(adminData);
        return res.status(200).json({message: "Register buldi"})
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  };
 

  LOGIN = async (req, res) => {
    try {
      const  adminData = req.body
      const adminLogin = await login(adminData)
      return res.status(200).json("Login buldi")
    } catch (err) {
      return res.status(500).json({err: err.message})
    }
  }
}



export default new AddUsersController();
