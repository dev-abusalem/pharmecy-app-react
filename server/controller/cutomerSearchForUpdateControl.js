const MCustomer = require("../models/medicine/MCustomer");

// Customer update
const customerUpdateControl = async (req, res) => {
  try {
    const customerId = req.params._id;
    const updateData = req.body; // Assuming you'll send the updated data in the request body

    const updatedCustomer = await MCustomer.findByIdAndUpdate(
      customerId,
      updateData,
      { new: true } // This option ensures that the updated document is returned
    );

    if (updatedCustomer) {
      res.status(200).json("Customer updated successfully");
    } else {
      res.status(404).json("Customer not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = customerUpdateControl;
