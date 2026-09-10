let tasks = require("../Models/tasksModel")
let taskValidationSchema = require("../Validator/taskValidator");

async function createTodo(req, res) {

    let { error } = taskValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        let { taskName, TaskUserName } = req.body;
        let newTask = await tasks.create({ taskName, TaskUserName });

        res.status(201).send(newTask)
    }
    catch {
        next(error);
    }

}

async function getAllTasks(req, res) {
    try {
        let allTasks = await tasks.find().populate("TaskUserName");
        res.send(allTasks)
    }
    catch {
        next(error);
    }

}

async function getTaskById(req, res) {

    try {
        let task = await tasks.findById(req.params.id);

        if (!task) {
            const err = new Error("Task not Found!")
            err.statusCode = 404;
            return next(err);
        }
        res.send(task)
    }
    catch {
        next(error);
    }



}

async function updateTask(req, res) {

    const { error } = taskValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }

    try {

        let task = await tasks.findByIdAndUpdate(
            req.params.id,
            { title: req.body.title, completed: req.body.completed },
            { returnDocument: 'after' }

        )

        if (!task) {
            const err = new Error("Task not Found!");
            err.statusCode = 404;
            return next(err);
        }

        res.send("Task Updated", task);



    } catch (error) {
        next(error)
    }

}

async function deletTaskbyId(req, res, next) {

    try {
        let task = await tasks.findByIdAndDelete(req.params.id);

        if (!task) {
            const err = new Error("Task not Found!")
            err.statusCode = 404;
            return next(err);
        }
        else {
            res.send({ message: "Task deleted:", task })

        }

    }
    catch (error) {
        next(error)
    }


}

module.exports = { createTodo, getAllTasks, getTaskById, updateTask, deletTaskbyId }