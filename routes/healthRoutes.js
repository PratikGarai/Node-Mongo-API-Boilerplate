const express = require("express");
const controllers = require("../controllers/healthControllers");

const router = express.Router();

// @desc    Check if API is running
// @route   GET /api/check
// access   public
router.get('/', controllers.getHealth);

// @desc    Sample 404
// @route   GET /api/check/404
// access   public
router.get('/404', controllers.get404);

// @desc    Sample 500
// @route   GET /api/check/500
// access   public
router.get('/500', controllers.get500);

module.exports = router;