const mongoose = require('mongoose'),
bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
   name:{
    type:String
   },
   email:{
    type:String,
    unique:true
   },
   password:{
    type:String
   }
})

/* schema.pre('save', function(next){
const user = this

bcrypt.hash(user.password,10)

.then(hash=>{
    user.password=hash 
    next()
})

.catch(err=>{
    console.log('erro occer' + err)
})

}) */

module.exports = mongoose.model('New Schema',schema)