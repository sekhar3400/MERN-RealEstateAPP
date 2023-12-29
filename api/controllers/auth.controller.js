const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
module.exports.signup =async (req,res)=>{
    var {name,email,password} =req.body
    password = await bcrypt.hashSync(password, 8);
    const newUser = new User({name,email,password})
    newUser.save().then(data=>res.send(data))

}