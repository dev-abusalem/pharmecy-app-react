const route = require('express').Router();
const cutomerDeleteControl = require('../controller/cutomerDeleteControl');
const cutomerSearchForEditControl = require("../controller/cutomerSearchForEditControl");
const cutomerSearchForUpdateControl = require("../controller/cutomerSearchForUpdateControl");


// Delete customer by id
route.delete("/customer/:_id", cutomerDeleteControl);

// Search For Edit customer by id ( Not for update only search)
route.get("/customer/edit/:_id", cutomerSearchForEditControl);




// Search For Update  customer by id ( Not for update only search)
route.put("/customer/update/:_id", cutomerSearchForUpdateControl);
module.exports = route
