import express from "express"
import "dotenv/config"
import { sequelize } from "./db/index.js";
import path from "path";
import bodyParser from "body-parser";
import ManageStudentRoute from "./routes/ManageStudentRoutes.js";
import AddUsersRoute from "./routes/AddUsersModel.js";
import fs from "fs"




const app = express();
let port = process.env.APP_PORT || 9000
let host = process.env.APP_HOST

app.use(express.json())
app.use(bodyParser.urlencoded({extended :true}))
app.set("views", path.join(process.cwd(), "src", "views"));
app.set("view engine", "ejs")

app.use(express.static(path.join(process.cwd(), "public")))
app.use(express.static(path.join(process.cwd(), "upload")));


app.use(ManageStudentRoute)
app.use(AddUsersRoute)





app.get("/api/user-login", (req, res) => {
  res.render("login");
});
app.get("/api/user-register", (req, res) => {
  res.render("register");
});

app.use("*/", (req, res) => {
  res.send({
    status:404,
    message: req.baseUrl + " not found"
  })
})





try {
    await sequelize.authenticate();
    console.log("Databasega ulanish muvaffaqiyatli o'rnatildi.");
  } catch (error) {
    console.error("Database bazasiga ulanib bo'lmadi:", error);
  }


app.listen(port, () => {
    console.log(`Server http://${host}:${port} portda ishga tushdi`);
})