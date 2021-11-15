const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(null, "FILE-" + Date.now() + path.extname(file.originalname));
    }
});


const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single("myfile");


module.exports = {
    storage,
    upload
}