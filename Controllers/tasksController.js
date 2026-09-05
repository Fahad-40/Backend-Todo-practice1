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
    
    let task = await tasks.findById(req.params.id);

    if(!task){
        res.status(404).send("Task Not Found!")
    }
    res.send(task)

}

async function updateTask(req , res) {
    
    let task = await tasks.findByIdAndUpdate(
        req.params.id,
        {title: req.body.title  , completed: req.body.completed},
        { returnDocument: 'after' } 
    );

   if(!task){
    res.status(404).send("Task not Found!!")
   }

   res.send("Task Updated" , task)
}

async function deletTaskbyId(req , res) {
    
try{
  let task = await tasks.findByIdAndDelete(req.params.id);
    
    if(!task){
        res.status(404).send("Task Not Found!")
    }
    
    res.send({message: "Task deleted:" , task})
}
catch (error){
res.status(500).json({message: error.message})
}

  
}



module.exports = {createTodo , getAllTasks , getTaskById , updateTask , deletTaskbyId}