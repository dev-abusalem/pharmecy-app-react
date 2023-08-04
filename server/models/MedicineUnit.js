const mongoose = require('mongoose');


const MedicineUnit = new mongoose.Schema({
    unitname:{
        type:String,
        require:true,
        unique:true
    },
    status:{
        type:String,
        default:"Active"
    }
}, {timestamps:true})

module.exports = mongoose.model("MedicineUnit", MedicineUnit);