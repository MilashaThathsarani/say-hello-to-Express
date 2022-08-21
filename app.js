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
    res.send('Hello Customer!')
})

app.get('/customer/:id', (req, res) => {
    // console.log('Get Request has come')
    console.log(req.keyParams);
})

app.get('/customer', (req, res) => {
    // console.log('Get Request has come')
    console.log(req.query);
})

 app.listen(port,(req,res) => {
     console.log(`Example app listening on port ${port}`);
 })