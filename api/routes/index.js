const express = require('express')
const router = express.Router()

const authroute = require('./auth.route.js')
router.use('',authroute)



module.exports = router