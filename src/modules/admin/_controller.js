import isInvalidData from "../../utils/isInvalidData.js";
import CreateStudent from "./service/Post.js";


const CREATEDSTUDENT = async (req, res) => {
   try {
      const newStudent = await CreateStudent(req.body)
      if(isInvalidData(req.body)){
         return res.status(400).json({
            message: "Malumotlar to'liq kiritilmagan",
         })
      }
      return res.status(201).json({
         data: newStudent,
         message: "Talaba ma'lumotlari yaratildi"
      })
   } catch (err) {
     return res.status(500).json({err: err.message})
   }
}
      
export {CREATEDSTUDENT};
