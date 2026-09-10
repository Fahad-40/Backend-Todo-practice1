const bcrypt = require("bcrypt");
const User = require('../Models/userModel');
const SignUpValidator = require("../Validator/signUp")

const signUp = async (req, res, next) => {
    try {
        const { error } = SignUpValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ message: "Any of the Credential is missing brother! Please fill all the credentials." })
        }

        const { userName, email, password } = req.body;
        const saltRounds = 2;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword
        })

        res.status(201).json(newUser);

    }
    catch (err) {
        next(err)
    }
};

module.exports = {signUp}