const MedicineAdd = require("../models/MedicineAdd");


// Add medicine
const addMedicine = async (req,res)=>{
    try {
        const savemedicine = new MedicineAdd(req.body)
        await savemedicine.save();

        res.status(200).json("Medicine added successfully");
    
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = addMedicine;