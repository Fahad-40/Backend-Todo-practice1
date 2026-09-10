const bcrypt = require("bcrypt");
const User = require("../Models/userModel");
const logInValidator = require("../Validator/logInValidator");

const logIn = async (req, res, next) => {

    try {
        const { error } = logInValidator.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Any of the Credential is missing brother! Please fill all the credentials." })
        }

const {email , password} = req.body;

const user = await User.findOne({ email });

if(!user){
return res.status(400).json({message: "Invalid Email or Password"});
}

let isMatch = await bcrypt

    }
    catch (err) {
next(err)
    }

}