const mongoose = require('mongoose');

const MedicineAddSchema = new mongoose.Schema({
    barcode: {
        type:String,
    },
    strength: {
        type:String,
    },
    boxsize: {
        type:String,
    },
    shelf: {
        type:String,
    },
    mcategory: {
        type:String,
    },
    medicinetype: {
        type:String,
        
    },
    manufacturer : {
        type:String,
    },
    vat: {
        type:String,
    },
    status: {
        type:String,
        default:"Active"
    },
    medicinename: {
        type:String,
    },
    genericname: {
        type:String,
    },
    munit: {
        type:String,
    },
    medicinedetails : {
        type:String,
    },
    medicineprice: {
        type:String,
    },
    mfeatureimage: {
        type:String,
    },
    manufactureprice: {
        type:String,
    },
    igta: {
        type:String,
    },

},{timestamps:true});

module.exports = mongoose.model('MedicineAdd', MedicineAddSchema);