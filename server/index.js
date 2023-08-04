const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const medicineRoute = require("./routes/medicine");
const cors = require('cors');
var cookieParser = require('cookie-parser')

// Secure URL
dotenv.config();
//
app.use(cors({
  "origin": "http://localhost:3000/",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
}))
// JSON Use
app.use(express.json());
app.use(cookieParser())

// Mongo DB Connection mongodb://localhost:27017
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://0.0.0.0:27017/medical")
  .then(() => {
    console.log("DB Connection Success !");
  })
  .catch((error) => {
    console.log(error);
  });
////////////////////////////// Starts Routes////////////////////////////////////////////

// Routes Auth
app.use("/auth", authRoute);
// Routes Auth
app.use("/medicine", medicineRoute );

//////////////////////////////// End Routes/////////////////////////////////////////////
// Start Server
app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
