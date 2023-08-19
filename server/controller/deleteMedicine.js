// controllers/medicineController.js
const MedicineAdd = require('../models/MedicineAdd');

// Delete
const medicineDeleteControl = async (req, res) => {
  try {
    const deletedMedicine = await MedicineAdd.findByIdAndDelete(req.params._id);
    
    if (!deletedMedicine) {
      // If the medicine with the specified ID doesn't exist
      return res.status(404).json({ message: 'Medicine not found' });
    }

    res.status(200).json('Medicine deleted successfully');

  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { medicineDeleteControl };
