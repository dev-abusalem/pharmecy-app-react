const mongoose = require('mongoose');



const MCustomerSchema = new mongoose.Schema({
    fullname: {
        type:String,
    },
    email1: {
        type:String,
    },
    mobile: {
        type:String,
        unique: true,
    },
    address1: {
        type:String,
    },
    mstate: {
        type:String,
    },
    country: {
        type:String,
        
    },
    phone: {
        type:String,
    },
    email2: {
        type:String,
    },
    contact: {
        type:String,
    },
    address2: {
        type:String,
    },
    city: {
        type:String,
    },
    zip: {
        type:String,
    },

},{timestamps:true});

module.exports = mongoose.model('MCustomer', MCustomerSchema);