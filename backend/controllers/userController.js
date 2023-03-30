const expressAsyncHandler = require("express-async-handler");
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// REGISTERING NEW USER MODEL "post method"
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


const registerUser = expressAsyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }


    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error("oops! the user Exist, please use another email")
    }



    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // Hashing password
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // create user
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


})

module.exports = {
    registerUser,
}
