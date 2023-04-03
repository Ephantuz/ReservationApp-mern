const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



const protect = asyncHandler(async (res, req, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from headers
            token = req.headers.authorization.split(' ')[1]

            // veruify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

            // get user from the token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error);
            res.status(400)
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not Authorized, no user token')
    }
})


module.exports = { protect }