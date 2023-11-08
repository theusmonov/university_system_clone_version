import express from "express"

const app = express();

app.listen(6900, () => {
    console.log("Server is running on port 6900");
})