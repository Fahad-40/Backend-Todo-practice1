const jwt = require('jsonwebtoken');
require('dotenv').config();
const protect = (req, res, next) => {

    const authHeader = req.headers.authorization;
    console.log(authHeader)

    if (!authHeader) {
        return res.status(401).json({ message: "No Tokens Provided Man!" })
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    }
    catch(err) {
          console.log("JWT Verification Error:", err.message);
        return res.status(401).json({ message: "Invalid or Expired Token!" })
    }

};

module.exports = protect;