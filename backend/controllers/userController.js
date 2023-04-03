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
    // CREATE NEW USER
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const user = await User.create({
        name,
        email,
        password: hashedPassword

    })

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Oops! Invalid user data ...')
    }

})


const loginUser = expressAsyncHandler(async (res, req) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    // check for user email
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            emal: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid user credentials, check your login details correctly')
    }
})

const userProfile = expressAsyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    })
})



// @GENARTE TOKEN JWS
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_URI, {
        expiresIn: '30d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    userProfile
}
