const multer = require("multer");
const route = require("express").Route();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/client/src/assets/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

route.post("/upload", upload.single("image"), (req, res,next) => {
  console.log("Image upload middleware is working...");
  next();
});
