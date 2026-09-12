let express = require("express");
let protect = require("../Middlewares/authMiddleware");

let app = express();

let router = express.Router();

let taskController = require("../Controllers/tasksController");

router.get("/" , protect , taskController.getAllTasks);
router.post("/" , taskController.createTodo)
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deletTaskbyId);

module.exports = router;