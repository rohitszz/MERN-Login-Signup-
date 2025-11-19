const router = require('express').Router();
const User = require('../models/user');

const {login} = require('../controllers/login');
const {signupToken, sendOtp, verifyOtp} = require('../controllers/signup'); 
const {authcheck, logout} = require("../controllers/auth");

router.post('/login', login);
router.post('/signuptoken', signupToken);
router.post('/signup/sendotp', sendOtp);
router.post('/signup/verifyotp', verifyOtp);
router.get('/authVerify', authcheck);
router.post('/dashboard/logout', logout);

module.exports = router;
  
