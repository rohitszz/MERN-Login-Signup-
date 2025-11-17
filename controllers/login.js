const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email: email });
        
        if(user && await bcrypt.compare( password ,user.password)){
            return res.status(200).json({
                success: true,
                message: "User Logged in successfully",
                userDetails: user
            })
        }
        else {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials",

            });

        }
    }
    catch (error) {
          return res.status(401).json({
                success: false,
                message: error.message,
            });
    }
}
