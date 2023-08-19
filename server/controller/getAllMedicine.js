const MedicineAdd = require("../models/MedicineAdd");

// Get All medicine
 const getAllMedicine = async (req,res)=>{
    try {
        const medicineList = await MedicineAdd.find()
        res.status(200).json(medicineList);
    } catch (error) {
        res.status(500).json("Server side error");
    }
}
module.exports = getAllMedicine;