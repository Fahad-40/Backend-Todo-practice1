const bcrypt = require("bcrypt");
const User = require("../Models/userModel");
const logInValidator = require("../Validator/logInValidator");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const logIn = async (req, res, next) => {

    try {
        const { error } = logInValidator.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Any of the Credential is missing brother! Please fill all the credentials." })
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        let isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invlaid email or Password" });
        }

        if (isMatch) {
            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );

            res.status(200).json({
                message: "Log In successfull!",
                token: token,
                user: user
            });
        }

    }
    catch (err) {
        next(err)
    }

}

module.exports = { logIn }