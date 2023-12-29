const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
module.exports.signup =async (req,res,next)=>{
    var {name,email,password} =req.body
    password = await bcrypt.hashSync(password, 8);
    const newUser = new User({name,email,password})
    try{
        await newUser.save().then(data=> res.send(data))
    }
    catch(err){
        next(err)
    }

}