let express = require("express");

let app = express();

let router = express.Router()

let userController = require("../Controllers/usersController");

router.post("/" , userController.createUser);
router.get("/" , userController.getAllUsers);

module.exports = router;