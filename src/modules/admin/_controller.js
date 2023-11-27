import isInvalidData from "../../utils/isInvalidData.js";
import GetStudentData from "./service/Get.js";
import CreateStudent from "./service/Post.js"; 


const CREATEDSTUDENT = async (req, res) => {
   try {
      const {filename} = req.file
      const studentData = req.body
      const newStudent = await CreateStudent(studentData, filename)
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
     return res.status(500).json({err: err.message + "Create student data"})
   }
}



const GETSTUDENTDATA = async (req, res) => {
   try {
      const dataStudent = await GetStudentData();
      return res.status(200).json({
         data: dataStudent,
         message: "Talaba ma'lumotlari ko'rsatildi"
      })
   } catch (err) {
      return res.status(500).json({err: err.message + "Get student data"})
   }
}

      
export {CREATEDSTUDENT, GETSTUDENTDATA};
