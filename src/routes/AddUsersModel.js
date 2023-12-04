import { Router } from "express";
import AddUsersController from "../auth/_authAddUsersController.js"

const AddUsersRoute = Router()

AddUsersRoute.post("/api/user-register", AddUsersController.USER_REGISTER)
AddUsersRoute.post("/api/user-login", AddUsersController.USER_LOGIN)
AddUsersRoute.post("/api/admin-register", AddUsersController.ADMIN_REGISTER)


export default AddUsersRoute;