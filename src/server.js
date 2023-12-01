import express from "express"
import "dotenv/config"
import { sequelize } from "./db/index.js";
import path from "path";
import ManageStudentRouter from "./routers/ManageStudentRouter.js";


const app = express();

let port = process.env.APP_PORT || 9000
let host = process.env.APP_HOST

app.use(express.json())
app.use(ManageStudentRouter)



app.use("*/", (req, res) => {
  res.send({
    status:404,
    message: req.baseUrl + " not found"
  })
})

app.use(express.static(path.join(process.cwd(), "upload")))


try {
    await sequelize.authenticate();
    console.log("Databasega ulanish muvaffaqiyatli o'rnatildi.");
  } catch (error) {
    console.error("Database bazasiga ulanib bo'lmadi:", error);
  }


app.listen(port, () => {
    console.log(`Server http://${host}:${port} portda ishga tushdi`);
})