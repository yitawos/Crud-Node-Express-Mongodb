const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/crude', {useNewUrlParser:true})

.then(conn=>{

    if(conn){
        console.log("mongodb connected")  
    }else{
        console.log("Faild to connecte") 
    }
   
})

.catch(err=>{
    console.log('erro occer' + err)
})