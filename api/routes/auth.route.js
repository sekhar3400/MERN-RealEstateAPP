const express = require('express')
const authController  = require('../controllers/auth.controller')

const router = express.Router()


//Auth routes

router.post('/api/user/signup',authController.signup)


module.exports = router