
const express = require('express')
const router = express.Router();
const loginUser = require('../controllers/authController.js')
const registerUser = require('../controllers/userController.js')



router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router
