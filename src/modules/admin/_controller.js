import isInvalidData from "../../utils/isInvalidData.js";
import createStudent from "./service/Create.js";
import getStudentData from "./service/Read.js";
import getById from "./service/ReadById.js";
import updateStudent from "./service/Update.js";
import deleteStudent from "./service/Remove.js"

class ManageStudentController {

  CREATEDSTUDENT = async (req, res) => {
    try {
      const { filename } = req.file || {};
      const studentData = req.body;
      const newStudent = await createStudent(studentData, filename);
      if (isInvalidData(req.body || req.file)) {
        return res.status(400).json({
          message: "Malumotlar to'liq kiritilmagan",
        });
      }
      return res.status(201).json({
        data: newStudent,
        message: "Talaba ma'lumotlari yaratildi",
      });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  };



  GETSTUDENT = async (req, res) => {
    try {
      const data = await getStudentData();
      return res.status(200).json({
        data,
        message: "Umumiy talabalar",
      });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  };



  GETSTUDENTBYPARAMSID = async (req, res) => {
    try {
      const idStudent = req.params.id;
      const findStudent = await getById(idStudent);
      if (!findStudent) {
        return res.status(404).json({
          message: "Id bo'yicha talaba topilmadi",
        });
      }
      return res.status(200).json({
        data: findStudent,
        message: "Id bo'yicha talaba ma'lumotlari topildi",
      });
    } catch (err) {
      return res.status(500).json({err: err.message})
    }
  }; 



  UPDATESTUDENTDATA = async (req, res) => {
    try {
      const studentID = req.params.id;
      const updatedData = req.body;
      const newResult = await updateStudent(studentID, updatedData);
      if (isInvalidData(req.body)) {
        return res.status(400).json({
          message: "Updated qilish uchun malumotlar to'liq kiritilmagan",
        });
      }
      if (!newResult) {
        return res.status(404).json({
          message: "Talaba topilmadi",
        });
      }
      return res.status(200).json({
        data: newResult,
        message: "Ma'lumot yangilandi",
      });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  };



  DELETESTUDENT = async (req, res) => {
    try {
      const studenId = req.params.id;
      const delStudentData = await deleteStudent(studenId);
      if (!delStudentData) {
        return res.status(404).json({
          message: "Bu id dagi talaba ma'lumotlari topilmadi",
        });
      } else {
        return res.status(200).json({
          message: "Talaba ma'lumot o'chirildi",
        });
      }
      
    } catch (err) {
      return res.status(500).json({err: err.message})
    }
  };
}










export default new ManageStudentController();
