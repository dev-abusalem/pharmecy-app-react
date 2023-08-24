const MCustomer = require("../models/medicine/MCustomer");


// Delete customer
const cutomerDeleteControl = async (req, res) => {
    try {
      await MCustomer.findByIdAndDelete({_id:req.params._id});
      res.status(200).json("Customer Deleted successfully")
      res.end();
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  
  

module.exports = cutomerDeleteControl