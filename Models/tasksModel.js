let mongoose = require("mongoose");

let taskSchema = mongoose.Schema({

taskName: {
    type: String,
    required: true
},

TaskUserName:{
    type:mongoose.Schema.Types.ObjectId,
ref:"UserModel"
},
completed: String

})

let task = mongoose.model("TaskModel" , taskSchema);

module.exports = task