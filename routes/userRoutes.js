const express = require("express");
const controllers = require("../controllers/userControllers");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// @desc    Register new user
// @route   POST /api/users
// @access  Public 
router.post('/', controllers.registerUser);

// @desc    Auth user
// @route   POST /api/users/login
// @access  Public 
router.post('/login', controllers.authUser);

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
router.get('/profile', protect, controllers.getUserProfile);

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
router.put('/profile', protect, controllers.updateUserProfile);


module.exports = router;