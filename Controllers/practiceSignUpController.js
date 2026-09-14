const bcrypt = require("bcrypt");
const userModel = require("../Models/practiceUserModel");

const signUpValidator = require("../Validator/practiceSignupValidator");

const signUp = async (req, res, next) {

    try {
        const { error } = signUpValidator.validate(req.body);

        if (error) {
            res.status(400).json({ message: "Practice Any of the Credential is missing brother! Please fill all the credentials." })
        }

        const { userName, email, password } = req.body;

        const saltRounds = 4;

        const hashedPassword = bcyrpt.hash(password, saltRounds);

        const newUser = ({
            userName,
            email,
            password: hashedPassword
        })

        res.status(200).json(newUser);

    }
    catch (err) {
        next(err)
    }


}