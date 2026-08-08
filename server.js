// require("dotenv").config();
let express = require("express");
let app = express();
let mongoose = require("mongoose");
let PORT = 3000

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
