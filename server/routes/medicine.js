const route = require("express").Router();
const MedicineCate = require("../models/MedicineCate");
const MedicineType = require("../models/MedicineType");
const MedicineUnit = require("../models/MedicineUnit");
const cutomerAllDataControl = require("../controller/getAllCustomer");
const cutomerAddControl = require("../controller/addCustomer");
const medicineAddControl = require("../controller/addMedicine");
const medicineListControl = require("../controller/getAllMedicine");
const { medicineDeleteControl } = require('../controller/deleteMedicine');
// Add Medicine


////////////////////////////////////// Medicine List /////////////////////////////////////////

////////////////////////////////////// Medicine Category /////////////////////////////////////////
// Add Medicine Category
route.post("/cate/add", async (req,res)=>{
    const isMCate = await MedicineCate.findOne({catename : req.body.catename})
    try {
        if(!isMCate){
            const newmcate = new MedicineCate({catename:req.body.catename, status:req.body.status});
            newmcate.save();
            res.status(200).json("Category added successfully")
        }else{
            res.status(409).json("This categroy is already registerd");
        }
    } catch (error) {
        res.status(500).json("Server side error")
    }
})

// Get Medicine Category
route.get("/cate", async (req,res)=>{
    try {
        const newmcate = await MedicineCate.find()
        res.status(200).json(newmcate);
    } catch (error) {
        res.status(500).json("Server side error");
    }
})

////////////////////////////////////// Medicine Category /////////////////////////////////////////


////////////////////////////////////// Medicine Unit /////////////////////////////////////////
// Add Medicine Unit
route.post("/unit/add", async (req,res)=>{
    const isMUnit = await MedicineUnit.findOne({unitname : req.body.unitname})
    try {
        if(!isMUnit){
            const newmunit = new MedicineUnit({unitname:req.body.unitname, status:req.body.status});
            newmunit.save();
            res.status(200).json("Unit added successfully")
        }else{
            res.status(409).json("This unit is already registerd");
        }
    } catch (error) {
        res.status(500).json("Server side error")
    }
})

// Get Medicine Unit
route.get("/unit", async (req,res)=>{
    try {
        const allunit = await MedicineUnit.find()
        res.status(200).json(allunit);
    } catch (error) {
        res.status(500).json("Server side error");
    }
})

////////////////////////////////////// Medicine Unit /////////////////////////////////////////




////////////////////////////////////// Medicine Type /////////////////////////////////////////
// Add Medicine Type
route.post("/type/add", async (req,res)=>{
    const isMType = await MedicineType.findOne({typename : req.body.typename})
    try {
        if(!isMType){
            const newmtype = new MedicineType({typename:req.body.typename, status:req.body.status});
            newmtype.save();
            res.status(200).json("Type added successfully")
        }else{
            res.status(409).json("This unit is already registerd");
        }
    } catch (error) {
        res.status(500).json("Server side error")
    }
})

// Get Medicine Type
route.get("/type", async (req,res)=>{
    try {
        const alltype = await MedicineType.find()
        res.status(200).json(alltype);
    } catch (error) {
        res.status(500).json("Server side error");
    }
})

////////////////////////////////////// Medicine  /////////////////////////////////////////
//Add Medicine
route.post("/medicine/add", medicineAddControl);

////////////////////////////////////// Medicine  /////////////////////////////////////////
//Add Medicine
route.get("/medicines", medicineListControl);

////////////////////////////////////// Medicine  /////////////////////////////////////////
//Add Medicine
route.delete('/medicine/:_id', medicineDeleteControl);
////////////////////////////////////// Medicine Customer /////////////////////////////////////////
//Add Customer
route.post("/customer/add", cutomerAddControl);

//Get All Customer
route.get("/customer", cutomerAllDataControl);

//Delete Customer
// route.delete("/customer/:_id", cutomerDeleteCont);

////////////////////////////////////// Medicine Customer /////////////////////////////////////////




// Export Route
module.exports = route;