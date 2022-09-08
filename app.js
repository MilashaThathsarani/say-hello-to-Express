const express = require('express');
const mongoose = require('mongoose')
//const customer = require('./routes/customer.js')
//const item = require('./routes/item')
//const user = require('./routes/user')

const app = express();
const port = 4000;

const url = 'mongodb://localhost/express'

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected')
})

app.use(express.json());
//app.use('/customer',customer)
//app.use('/item',item)
//app.use('/user',user)



// app.get('/', (req, res) => {
//     console.log('Get Request has come')
//     res.send('Hello World!')
// })

// app.get('/customer', (req, res) => {
//     // console.log('Get Request has come')
//     console.log(req.body)
//     res.send('<h1>Customer get request has come !</h1>')
// })
//
// app.get('/customer/:id', (req, res) => {
//     // console.log('Get Request has come')
//     console.log(req.keyParams);
// })
//
// app.get('/customer', (req, res) => {
//     // console.log('Get Request has come')
//     console.log(req.params.id);
// })
//
// app.post('/', (req,res) => {
//     res.send('<h2>post request come for / route</h2>')
// })
//
// app.post('/customer', (req,res) => {
//     res.send('<h2>post request come for customer / route</h2>')
//     console.log(req.body.id);
// })
//
// app.delete('/customer', (req,res) => {
//     console.log(req.query.id)
//     res.send('<h2>delete request come for customer/ route</h2>')
// })

 app.listen(port,(req,res) => {
     console.log(`Example app listening on port ${port}`);
 })