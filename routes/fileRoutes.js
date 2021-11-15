const express = require("express");
const controllers = require("../controllers/fileContollers");

const router = express.Router();

// @desc    Sample file upload
// @route   POST /api/files/sampleUpload
// access   public
router.post('/sampleUpload', controllers.sampleFileUplaod);


// @desc    Sample file upload
// @route   POST /api/files/sampleUpload
// access   public
router.get('/sampleDownload/:id', controllers.sampleFileDownload);


module.exports = router;