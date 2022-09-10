
const express = require('express');
const router = express.Router();
const Item = require('../Models/item.models')

router.get('/',async (req,res) =>{
    try {
        const items= await Item.find()
        res.send(items)
    }catch (err) {
        res.send('Err:'+ err)
    }
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