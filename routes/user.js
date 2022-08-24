const express = require('express');
const router = express.Router();
const mysql = require('mysql')
const db = require('../configs/db.configs')

const connection = mysql.createConnection(db._database)

connection.connect(function (error) {
    if (error) {
        console.log(error);
    }else {
        console.log("Connected to the MySQL Server")
        var userTableQuery = "CREATE TABLE IF NOT EXISTS user (id VARCHAR(255) PRIMARY KEY , name VARCHAR (255),username VARCHAR (255))"
        connection.query(userTableQuery, function (error,result) {
            if (error) throw error;
            console.log("User table Created")
        })
     }
})

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