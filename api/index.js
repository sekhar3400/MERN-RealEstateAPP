const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Mongo Db connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/RealEstateApp').then(()=>console.log("Connected to MonogDB"))
//ROute 
const router = require('./routes')
app.use('/',router)

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const errMessage = err.message || 'internal Error'
  res.status(statusCode).send({
    sucsess:false,
    message : errMessage
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})