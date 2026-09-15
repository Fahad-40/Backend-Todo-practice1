


const protect = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeaders) {
        return res.status(400).json({ message: "No token provided man!" })
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = Jwt.verify(token, process.env.JWT_SECRET)
        req.user_id = decoded.id;
        next();
    } catch (err) {
        console.log("Jwt Verification Error", err.messsage);

        res.status(400).json({ message: "Invalid or expired Token!" })
    }

}


