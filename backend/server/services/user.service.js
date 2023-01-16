const User = require("../models/User.model");

require('dotenv').config();

const userService = {
    //GET ALL USER
    getAllUsers: async() => {
        return await User.find({}.select('username email admin'))
    },

    //DELETE
    deleteUser: async() => {
        return await User.deleteOne({_id: id})
    },

    //UPDATE
    updateUser: async() => {
        return await User.findByIdAndUpdate({_id: id}).select('id username email')
    }
}

module.exports = userService;