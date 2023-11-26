import { Router } from "express";
import { CREATEDSTUDENT } from "../modules/admin/_controller.js";






 const AdminCreatedStudentRouter = Router()

AdminCreatedStudentRouter.post("/api/admin/create-student", CREATEDSTUDENT);



export default AdminCreatedStudentRouter;

