const schema = require('../Model/schema')


exports.view = (req,res)=>{
    res.render('All_User')
}

exports.addUser = (req,res)=>{
    res.render('new_user')
}

exports.updateUser = (req,res)=>{
    res.render('update_user')
}

//crude opration
exports.create = (req,res)=>{

const user = new schema({
  
    name:req.body.name,
    email:req.body.email,
    password:req.body.password

})

schema.create(user)
    
}
