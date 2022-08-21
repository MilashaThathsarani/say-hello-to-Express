const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    console.log('Get Request has come')
    res.send('Hello World!')
})

app.get('/customer', (req, res) => {
    // console.log('Get Request has come')
    res.send('Hello Customer!')
})

 app.listen(port,(req,res) => {
     console.log(`Example app listening on port ${port}`);
 })