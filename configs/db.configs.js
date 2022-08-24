module.exports = {
    _database: {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'express'
    }
}

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()