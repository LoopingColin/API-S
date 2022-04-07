// BUILD SERVER
const express = require('express')
const server = express()
// CONNECT TO router.js
const router = require('./router')
const PORT = process.env.PORT || 3000

// CREATE CONNECTION
const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
})

// CONNECT TO DATABASE
con.connect((error) => {
    if(!error) {
        console.log('The database is ready gocrazy')
    } else {
        console.log('get your code fixed man', error)
    }
})

//  CREATE ALL ROUTE
server.get('/api', (req,res)=> {
    res.json({
        'All Categories': `http://localhost:${PORT}/api/category`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Films': `http://localhost:${PORT}/api/film`
    })
})

server.get('/api/:table', (req,res)=> {
    const table = req.params.table

    let sql;

    if(table === 'actor') {
        sql = 'SELECT * FROM actor ORDER BY last_name, first_name'
    } else {
        sql = `SELECT * FROM ${table}`
    }
    con.query(
        sql,
        (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('ERROR',  error)
            }
        }
    )
})

server.get('/api/:table/:id', (req, res)=> {
    const table = req.params.table
    const id = req.params.ids

    con.query(
        `SELECT * FROM ${table} WHERE ${table} _id = ${id}`,
        (error, rows) => {
            if(error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } console.log('ERROR', error)
        }
    )
})



// SET VIEW ENGINE
server.set('view engine', 'ejs')

server.use('/', router)

server.listen(PORT, ()=> console.log(`PORT: ${PORT}`))