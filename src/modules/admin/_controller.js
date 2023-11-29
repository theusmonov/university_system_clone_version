import isInvalidData from "../../utils/isInvalidData.js";
import GetStudentData from "./service/Get.js";
import getById from "./service/GetbyId.js";
import CreateStudent from "./service/Post.js";
import updateStudent from "./service/Update.js";

const CREATEDSTUDENT = async (req, res) => {
  try {
    const { filename } = req.file;
    const studentData = req.body;
    const newStudent = await CreateStudent(studentData, filename);
    if (isInvalidData(req.body)) {
      return res.status(400).json({
        message: "Malumotlar to'liq kiritilmagan",
      });
    }
    return res.status(201).json({
      data: newStudent,
      message: "Talaba ma'lumotlari yaratildi",
    });
  } catch (err) {
    return res
      .status(500)
      .json({
        err:
          err.message + "Talaba ma'lumotlarini yaratishda xatolik controller",
      });
  }
};

const GETSTUDENTDATA = async (req, res) => {
  try {
    const dataStudent = await GetStudentData();
    return res.status(200).json({
      data: dataStudent,
      message: "Talaba ma'lumotlari ko'rsatildi",
    });
  } catch (err) {
    return res
      .status(500)
      .json({
        err: err.message + "Talaba ma'lumotlarini olishda xatolik controller",
      });
  }
};

const UPDATESTUDENTDATA = async (req, res) => {
  try {
    const studentID = req.params.id;
    const updatedData = req.body;
    const newResult = await updateStudent(studentID, updatedData);
    if (isInvalidData(req.body)) {
      return res.status(400).json({
        message: "Updated qilish uchun malumotlar to'liq kiritilmagan",
      });
    }
    if(!newResult){
      return res.status(404).json({
         message: "Talaba topilmadi"
      })
    }
    return res.status(200).json({
      data: newResult,
      message: "Ma'lumot yangilandi",
    });
  } catch (err) {
    console.error(
      "Talaba ma'lumotlarini yangilashdagi xatolik controller", err
    );
  }
};


const GETSTUDENTBYPARAMSID = async (req, res) => {
   try {
      const idStudent = req.params.id;
      const findStudent = await getById(idStudent);
      if(!findStudent){
         return res.status(404).json({
            message: "Id bo'yicha talaba topilmadi"
         })
      }
      return res.status(200).json({
         data: findStudent,
         message: "Id bo'yicha talaba ma'lumotlari topildi"
      })
   } catch (err) {
      console.error("Talabani id bo'yicha qidirishda controllerda xatolik", err)
   }
}

export { CREATEDSTUDENT, GETSTUDENTDATA, UPDATESTUDENTDATA, GETSTUDENTBYPARAMSID};
