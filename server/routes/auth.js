const route = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
var cookieParser = require('cookie-parser')




// Register
route.post("/register", async (req, res) => {

  
  try {
    const isUser = await User.findOne({email:req.body.email});

    if(!isUser){
      
      const saveuser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        isAdminn:req.body.isAdminn,
        profileImg:req.body.profileImg
      });

      await saveuser.save();

      res.status(200).json("User Registerd successfull");
      
    }else{
      res.status(409).json("Email already exist");
    }

    
  } catch (error) {
    res.status(500).json(error);
  }

});





// Login
route.post("/login", async (req, res) => {
  
  try {
    const isUser = await User.findOne({email:req.body.email});

    if(!isUser){
      res.status(404).json("Authentication error");
    }else{
      
      if(isUser.password == req.body.password){

        const token = jwt.sign({ foo: 'bar' }, "medicalAuthToken");
        
        res.status(200).json({
          message:"Login successfull",
          token:token,
          userInfo:{
            adminRoll:isUser.isAdmin,
            email:isUser.email,
            name:isUser.name
          }
        })

      }else{
        res.status(404).json("Authentication error")
      }
    }

    
  } catch (error) {
    res.status(500).json(error);
  }

});

module.exports = route;
