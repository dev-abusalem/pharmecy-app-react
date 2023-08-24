const MCustomer = require("../models/medicine/MCustomer");

//  Customer search for edit 
const cutomerSearchForEditControl = async (req, res) => {
    try {

      const isCustomerFind = await MCustomer.findById({_id:req.params._id});

      if(isCustomerFind){

        res.status(200).json(isCustomerFind);

      }else{

        res.status(404).json("Customer Not Found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  
  

module.exports = cutomerSearchForEditControl 