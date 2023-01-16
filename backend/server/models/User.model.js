const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {type: String, unique: true, require: true},
    email: {type: String, unique: true, require: true},
    password: {type: String, minlength: 8, require: true},
    admin: {type: Boolean, default: "false", require: true}
    }, 
    {timestamps: true}
)

const User = mongoose.model("user", UserSchema);

module.exports = User;