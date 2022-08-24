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
            //console.log(result);
            if (result.warningCount === 0){
             console.log("User table Created");
            }
        })
     }
})

router.get('/',(req,res) =>{
    var query = "SELECT * FROM user"
    connection.query(query, (error,rows) =>{
        if (error) throw error
            res.send(rows)
    })
})

router.post('/', (req,res) =>{
    console.log(req.body)
    const id = req.body.id;
    const name = req.body.name;
    const username = req.body.username;

    var query = "INSERT INTO user (id, name, username) VALUES (?,?,?)"
    connection.query(query, [id,name,username],(error) =>{
        if (error){
            res.send({'message' :'Duplicate Entry'})
        }else {
            res.send({'message' : 'User created'})
        }
    });
})

router.put('/', (req,res) =>{
    const id = req.body.id;
    const name = req.body.name;
    const username = req.body.username;

    var query = "UPDATE user SET name=?, username=? WHERE id=?"
    connection.query(query, [name,username,id],(error,rows) =>{
        if (error) throw error
        if (rows.affectedRows > 0){
            res.send({'message':'User Updated'})
        }else {
            res.send({'message':'User not found'})
        }
    });
})

router.delete('/:id', (req,res) =>{
    console.log(req.params.id)
    res.send('user delete')
})

router.get('/:id', (req,res) =>{
    res.send('get user by id')
})

module.exports = router