let tasks = require("../Models/tasksModel")

async function createTodo(req , res) {
    let {taskName , TaskUserName } = req.body;

    if (!taskName || !TaskUserName) {
        res.status(400).send("Task name or User Name is missing Brother!!")
    }

    let newTask = await tasks.create({taskName , TaskUserName });

    res.status(201).send(newTask)

}

async function getAllTasks(req, res) {
    let allTasks = await tasks.find().populate("TaskUserName");
    res.send(allTasks)
}

async function getTaskById(req , res) {
    
    let task = tasks.findBy

}

module.exports = {createTodo , getAllTasks}