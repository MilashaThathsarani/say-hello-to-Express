const express = require('express');
const app = express();

const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Get Request has come')
    res.send('Hello World!')
})

app.get('/customer', (req, res) => {
    // console.log('Get Request has come')
    console.log(req.body)
    res.send('<h1>Customer get request has come !</h1>')
})

app.get('/customer/:id', (req, res) => {
    // console.log('Get Request has come')
    console.log(req.keyParams);
})

app.get('/customer', (req, res) => {
    // console.log('Get Request has come')
    console.log(req.params.id);
})

app.post('/', (req,res) => {
    res.send('<h2>post request come for / route</h2>')
})

app.post('/customer', (req,res) => {
    res.send('<h2>post request come for customer / route</h2>')
})

 app.listen(port,(req,res) => {
     console.log(`Example app listening on port ${port}`);
 })