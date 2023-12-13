import jwt from "jsonwebtoken";


const verifyLoginToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(401).json({message: "Token mavjud emas"})
        }
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if(err){
                return res.status(403).json({message: "Noto'g'ri token"})
            }
            req.decodedToken = decodedToken;
            next()
        })
    } catch (err) {
      return res.status(500).json({err: err.message})
    }
};

export default verifyLoginToken;