const express = require('express')
const mongoose =require('mongoose')

/*const customer=require('./routes/customer')*/
// const item=require('./routes/item')
// const user=require('./routes/user')
const app = express()
const port = 4000

const  url= 'mongodb://127.0.0.1/express'

mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection

con.on("open",()=>{
    console.log('mongodb connected')
})
app.use(express.json());   //if we use json object inside our app.js

// app.use('/item',item)
// app.use('/users',user)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
