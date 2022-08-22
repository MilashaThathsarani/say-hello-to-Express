const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.send('item get')
})

router.get('/item-name',(req,res) =>{
    res.send('item-name request came')
})

router.post('/',(req,res) =>{
    res.send('item post')
})

router.delete('/',(req,res) =>{
    res.send('item delete')
})

module.exports = router