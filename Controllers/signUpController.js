const bcrypt = require("bcrypt");
const User = require('../Models/userModel');

const signUp = async (req, res, next) =>{

    try {
        const { name, email, password } = req.body;
        const saltRounds = 2;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json(newUser);

    }
    catch (err) {
        next(err)
    }

};
