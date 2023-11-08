import express from "express"
import "dotenv/config"

const app = express();

let port = process.env.APP_PORT || 7000
let host = process.env.APP_HOST

app.listen(port, () => {
    console.log(`Server  http://${host}:${port} da ishga tushdi`);
})