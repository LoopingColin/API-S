const con = require('../../config/dbconfig')
// const dao = require('../daoCommon')
const daoCommon = require('../daoCommon')

// con.query(sql, obj, callback(error,dbres))

const filmDao = {
    ...daoCommon,
    // findALL & findById

    // create record
    create: (req, res) => {
        con.query(
            'INSERT INTO film SET ?',
            req.body,
            (error, dbres)=> {
                if(!error) {
                    res.send(`Last id: ${dbres.insertId}`)
                } else {
                    console.log(' DAO ERROR', error)
                    res.send('Error creating record')
                }
            }
        )
    },

    // update record
    update: (req, res)=> {
        con.query('UPDATE film SET release_year = ? WHERE film_id = ?', [req.body.release_year, req.body.film_id],
        (error,dbres)=> {
            if(!error) {
                res.send(`Changed ${dbres.changedRows} row(s)`)
            } else {
                console.log(` DAO ERROR`, error)
                res.send('Error updating record')
            }
        })
    }
}

module.exports = filmDao