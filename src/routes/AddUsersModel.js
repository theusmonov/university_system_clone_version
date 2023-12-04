import { Router } from "express";
import AdminController from "../auth/_authAdminController.js"

const AddUsersRoute = Router()

AddUsersRoute.post("/api/admin-register", AdminController.REGISTER)
AddUsersRoute.post("/api/admin-login", AdminController.LOGIN)


export default AddUsersRoute;