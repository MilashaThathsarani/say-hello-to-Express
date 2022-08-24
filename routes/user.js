const express = require('express');
const router = express.Router();
const mysql = require('mysql')
const db = require('/configs/db.configs')
const connection = mysql.createConnection(
    db._database
)



router.get('/',(req,res) =>{
    res.send('user get')
})

router.post('/', (req,res) =>{
    console.log(req.body)
    res.send('user post')
})
router.put('/', (req,res) =>{
    res.send('user put')
})

router.delete('/:id', (req,res) =>{
    console.log(req.params.id)
    res.send('user delete')
})

router.get('/:id', (req,res) =>{
    res.send('get user by id')
})

module.exports = router