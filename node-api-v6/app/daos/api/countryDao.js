const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const countryDao = {
    ...daoCommon,

    create: (req, res)=> {
        con.query(
            `INSERT INTO country SET ?`,
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

    update: (req, res)=> {
        con.query('UPDATE country = ?, last_update = ? WHERE country_id = ?',
        [req.body.country, req.body.last_update, req.body.country_id],(error, dbres)=> {
            if(!error) {
                res.send(`Changed ${dbres.changedRows}row(s)`)
            } else {
                console.log(' DAO ERROR')
                res.send('Error updating record')
            }
        })
    }
}

module.exports = countryDao