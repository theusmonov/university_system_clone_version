import { AdminCreateStudentModel } from "../../../model/AdminCreateStudentModel.js"



const GetStudentData = async () => {
    try {
        const getData = await AdminCreateStudentModel.findAll()
        return getData;
    } catch (err) {
        console.error("Xatolik talaba malumotlarini olishda")
    }
}

export default GetStudentData;