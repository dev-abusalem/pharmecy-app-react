const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    profileImg:{
        type:String,
        default:""
    }
}, {timestamps:true})

module.exports = mongoose.model("User", UserSchema);