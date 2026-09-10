let express = require("express");

let router = express.Router();

let signUpController = require("../Controllers/signUpController");

router.post("/signup" , signUpController.signUp);

module.exports = router;