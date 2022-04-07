const express = require('express')
const router = express.Router()
const connection = require('../../config/dbconfig')

// path => /api/actor
router.get('/', (req, res)=> {
    connection.query(
        'SELECT * FROM actor',
        (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('ERROR', error)
            }
        }
    )
})



module.exports = router
