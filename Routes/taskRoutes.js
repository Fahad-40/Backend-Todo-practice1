let express = require("express");

let app = express();

let router = express.Router();

let taskController = require("../Controllers/tasksController");


router.get("/" , taskController.getAllTasks);
router.post("/" , taskController.createTodo)

module.exports = router;