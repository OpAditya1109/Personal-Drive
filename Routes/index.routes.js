const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
router.get("/home", (req, res) => {
  res.render("home");
  
});

router.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    return res.redirect("/home")
    
});
module.exports = router;
