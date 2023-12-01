import { Router } from "express";
import ManageStudentController from "../modules/admin/_controller.js"
import { upload } from "../utils/multer.js";

const ManageStudentRouter = Router();

ManageStudentRouter.post("/api/admin/create-student", upload.single("TalabaRasmi"), ManageStudentController.CREATEDSTUDENT);
ManageStudentRouter.get("/api/admin/get-student", ManageStudentController.GETSTUDENT);
ManageStudentRouter.put("/api/admin/update-student/:id", ManageStudentController.UPDATESTUDENTDATA);
ManageStudentRouter.get("/api/admin/get-student/:id", ManageStudentController.GETSTUDENTBYPARAMSID);
ManageStudentRouter.delete("/api/admin/delete-student/:id", ManageStudentController.DELETESTUDENT)

export default ManageStudentRouter;
