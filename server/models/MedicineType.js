const mongoose = require('mongoose');


const MedicineTypeSchema = new mongoose.Schema({
    typename:{
        type:String,
        require:true,
        unique:true
    },
    status:{
        type:String,
        default:"Active"
    }
}, {timestamps:true})

module.exports = mongoose.model("MedicineType", MedicineTypeSchema);