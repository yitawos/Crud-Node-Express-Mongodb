require('dotenv').config('confid')
const express = require('express'),
app = express(),
router = require('./server/Router/router')
require('./server/Model/connect')


//port value
const port = process.env.port || 8080

//mideleware
app.set("view engine","ejs")

app.get('/',router)
app.get('/addUser',router)
app.get('/updateUser',router)

//crude
app.post('/addUser',router)

app.listen(port, ()=>{
    console.log(`server started at port : ${port} ...`)
})



