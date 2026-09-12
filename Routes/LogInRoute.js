let express = require("express");

let router = express.Router();

let logInController = require("../Controllers/logInController");

router.post("/login" , logInController.logIn);

module.exports = router