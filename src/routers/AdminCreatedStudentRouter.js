import { Router } from "express";
import { CREATEDSTUDENT, GETSTUDENTDATA } from "../modules/admin/_controller.js";
import { upload } from "../utils/multer.js";


const AdminCreatedStudentRouter = Router()

AdminCreatedStudentRouter.post("/api/admin/create-student", upload.single("TalabaRasmi"), CREATEDSTUDENT);
AdminCreatedStudentRouter.get("/api/admin/get-student", GETSTUDENTDATA)


export default AdminCreatedStudentRouter;

