const router = require('express').Router();
const User = require('../models/user');

const {login} = require('../controllers/login');
const {signupToken, sendOtp, verifyOtp} = require('../controllers/signup'); 

router.post('/login', login);
router.post('/signuptoken', signupToken);
router.post('/signup/sendotp', sendOtp);
router.post('/signup/verifyotp', verifyOtp);

module.exports = router;
  