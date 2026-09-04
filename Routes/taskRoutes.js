let express = require("express");

let app = express();

let router = express.Router();

let taskController = require("../Controllers/tasksController");


router.get("/" , taskController.getAllTasks);
router.post("/" , taskController.createTodo)
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deletTaskbyId);
module.exports = router;