const route = require('express').Router();
const MCustomer = require("../models/medicine/MCustomer");

// Get All customer
 const getAllCustomer = async (req,res)=>{
    try {
        const allcustomer = await MCustomer.find()
        res.status(200).json(allcustomer);
    } catch (error) {
        res.status(500).json("Server side error");
    }
}
module.exports = getAllCustomer