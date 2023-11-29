import {ManageStudentModel } from "../../../model/ManageStudentModel.js"



const GetStudentData = async () => {
    try {
        const getData = await ManageStudentModel.findAll()
        return getData;
    } catch (err) {
        console.error("Xatolik talaba malumotlarini olishda service qismida")
    }
}

export default GetStudentData;