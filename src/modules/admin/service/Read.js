import {ManageStudentModel } from "../../../model/ManageStudentModel.js"

const getStudentData = async () => {
   const student = await ManageStudentModel.findAll()
   if(!student){
    return;
   }
   return student;
}

export default getStudentData;