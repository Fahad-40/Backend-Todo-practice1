let mongoose = require("mongoose");

let userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

});

let userModel = mongoose.model("userModel" , userSchema);

module.exports = userModel;