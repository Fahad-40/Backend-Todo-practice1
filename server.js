// require("dotenv").config();
let express = require("express");
let app = express();
let mongoose = require("mongoose");
let PORT = 3000;
let userRoutes = require("./Routes/userRoutes");
let taskRoutes = require("./Routes/taskRoutes");

app.use(express.json());

app.use("/users",userRoutes);
app.use("/tasks",taskRoutes);

mongoose.connect("mongodb://localhost:27017/mongoosePrcTodo1")
.then(()=> {
    console.log("Mongo db Connected!")
})
.catch(()=> {
    console.log("Mongo db found an error!")
})
app.listen(PORT , ()=>{
    console.log(`App is listening on ${PORT}`)
})
