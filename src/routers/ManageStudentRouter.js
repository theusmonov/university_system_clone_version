import { Router } from "express";
import {
  CREATEDSTUDENT,
  GETSTUDENTBYPARAMSID,
  GETSTUDENTDATA,
  UPDATESTUDENTDATA,
} from "../modules/admin/_controller.js";
import { upload } from "../utils/multer.js";

const ManageStudentRouter = Router();

ManageStudentRouter.post("/api/admin/create-student",upload.single("TalabaRasmi"),CREATEDSTUDENT);
ManageStudentRouter.get("/api/admin/get-student", GETSTUDENTDATA);
ManageStudentRouter.put("/api/admin/update-student/:id", UPDATESTUDENTDATA);
ManageStudentRouter.get("/api/admin/get-student/:id", GETSTUDENTBYPARAMSID);

export default ManageStudentRouter;
