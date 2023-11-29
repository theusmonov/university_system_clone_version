import { ManageStudentModel } from "../../../model/ManageStudentModel.js"


const getById = async (studenId) => {
    try {
        const findStudent = await ManageStudentModel.findOne({
            where: {
                id: studenId
            }
        })
        if(!findStudent){
            return;
        }
        return findStudent;
    } catch (err) {
        console.error("Id bo'yicha ma'lumotni olishda service qismida xatolik", err)
    }
}

export default getById;