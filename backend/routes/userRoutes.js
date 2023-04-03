const express = require('express')
const router = express.Router()
const {protect} = require('../middlewares/authMiddleware')

const { 
    registerUser,
    loginUser,
    userProfile
 } = require('../controllers/userController')


router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/profile',userProfile)



module.exports = router