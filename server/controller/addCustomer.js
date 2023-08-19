const MCustomer = require("../models/medicine/MCustomer");


// Add customer
const addCustomer = async (req,res)=>{
    try {
        const isUser = await MCustomer.findOne({mobile:req.body.mobile})
    
        if(!isUser){
            
        const savecustomer = new MCustomer( {
            fullname:req.body.fullname,
            email1:req.body.email1,
            mobile:req.body.mobile,
            address1:req.body.address1,
            mstate:req.body.mstate,
            country:req.body.country,
            phone:req.body.phone,
            email2:req.body.email2,
            contact:req.body.contact,
            address2:req.body.address2,
            city:req.body.city,
            zip:req.body.zip
        }
        )
        await savecustomer.save();

        res.status(200).json("Customer added successfully");

        }else{
            res.status(409).json("Customer already registerd");
 
        }
    
    
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = addCustomer;