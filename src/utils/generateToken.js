import jwt from "jsonwebtoken";
import "dotenv/config"

const generateToken = (login, password) => {
      return jwt.sign({login, password}, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      })
}

export default generateToken;