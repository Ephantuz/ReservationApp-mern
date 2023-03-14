const express = require('express')
const router = express.Router()

const { registerUser } = require('../controllers/userController')


router.post('/', registerUser)
router.post('/login',)
router.post('/profile',)



module.exports = router