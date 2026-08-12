let users = require("../Models/UserModel")


async function createUser(req , res) {
    
let {userName , email} = req.body;

let newUser = await users.create({userName , email});

res.status(201).send(newUser)

}

async function getAllUsers(req , res) {
    let allUsers = await  users.find()
    res.send(allUsers);
}

module.exports = {createUser , getAllUsers}