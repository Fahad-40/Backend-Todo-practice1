let logInValidator = require("../Validator/practiceLoginValidator");
let jwt = require("jwtwebtoken")
let bcrypt = require("bcrypt");
require("dotenv").config();
let userModel = require("../Models/practiceUserModel");

const logIn = async (req, res, next) => {

    try {

        const { error } = logInValidator.validate(req.body);
        if (error) {
          return  res.status(400).json({ message: "Any of the Credential is missing brother! Please fill all the credentials." })
        }

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
          return  res.status(400).json({ message: "Invalid Email or Password" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invlaid email or Password" });
        }

        if (isMatch) {
            const token = jwt.sign(
{ id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            )

        res.status(200).json({
            message: "log In Successfull",
             token: token,
                user: user
        })

    }

    }
    catch (err) {
    next(err)
}

}
module.exports = {logIn}