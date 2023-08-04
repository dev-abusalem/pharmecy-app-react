const mongoose = require('mongoose');


const MedicineCateSchema = new mongoose.Schema({
    catename:{
        type:String,
        require:true,
        unique:true
    },
    status:{
        type:String,
        default:"Active"
    }
}, {timestamps:true})

module.exports = mongoose.model("MedicineCate", MedicineCateSchema);