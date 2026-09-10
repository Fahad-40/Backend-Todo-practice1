let mongoose = require("mongoose");

let userSchema = mongoose.Schema({

userName:{
    type: String,
    required: true
},

email: {
    type: String,
    reuired: true
},

    password: {
        type: String,
        required: true
    }

})

let users = mongoose.model("UserModel" , userSchema)

module.exports = users;
