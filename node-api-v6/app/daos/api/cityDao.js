const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const cityDao = {
    ...daoCommon,

    create:(req, res) => {
        con.query(
            `INSERT INTO city SET ?`,
            req.body,
            (error, dbres) => {
                if(!error) {
                    res.send(`Last id: ${dbres.insertId}`)
                } else {
                    console.log( `DAO ERROR`, error)
                    res.send('Error creating record')
                }
            }
        )
    },

    update: (req, res) => {
        con.query('UPDATE city = ?, city = ? country_id = ? last_update = ? WHERE city_id = ?',
        [req.body.city, req.body.city, req.body.country_id, req.body.last_update, req.body.city_id], (error, dbres)=> {
            if(!error) {
                res.send(`Changed ${dbres.changedRows}row (s)`)
            } else {
                console.log(' DAO ERROR')
                res.send('Error updating record')
            }
        })
    }
}

module.exports = cityDao