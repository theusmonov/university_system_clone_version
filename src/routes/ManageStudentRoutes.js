import { Router } from "express";
import ManageStudentController from "../modules/admin/_controller.js"
import { upload } from "../utils/multer.js";

const ManageStudentRoute = Router();

ManageStudentRoute.post("/api/admin/create-student", (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.status(400).json({err: err.message})
        } else {
            ManageStudentController.CREATEDSTUDENT(req, res)
        }
        });
});
ManageStudentRoute.get("/api/admin/get-student", ManageStudentController.GETSTUDENT);
ManageStudentRoute.put("/api/admin/update-student/:id", ManageStudentController.UPDATESTUDENTDATA);
ManageStudentRoute.get("/api/admin/get-student/:id", ManageStudentController.GETSTUDENTBYPARAMSID);
ManageStudentRoute.delete("/api/admin/delete-student/:id", ManageStudentController.DELETESTUDENT)

export default ManageStudentRoute;
