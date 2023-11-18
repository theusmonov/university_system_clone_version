import express from "express"
import "dotenv/config"
import { sequelize } from "./db/index.js";
import AdminCreatedStudentRouter from "./routers/AdminCreatedStudentRouter.js";

const app = express();

let port = process.env.APP_PORT || 7000
let host = process.env.APP_HOST


app.use(express.json())
app.use(AdminCreatedStudentRouter)



try {
    await sequelize.authenticate();
    console.log("Databasega ulanish muvaffaqiyatli o'rnatildi.");
  } catch (error) {
    console.error("Database bazasiga ulanib bo'lmadi:", error);
  }




app.listen(port, () => {
    console.log(`Server http://${host}:${port} portda ishga tushdi`);
})