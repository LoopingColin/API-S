const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const addressDao = {
    ...daoCommon,

    create:(req, res)=> {
        con.query(
            `INSERT INTO address SET ?`,
            req.body,
            (error, dbres)=> {
                if(!error) {
                    res.send(`Last id: ${dbres.insertId}`)
                } else {
                    console.log( ` DAO ERROR`, error)
                    res.send('Error creating record')
                }
            }
        )
    },

    update: (req, res)=> {
        con.query('UPDATE address = ?, address2  = ? district = ? city_id = ? post_code = ? phone = ? location - ? last_update = ? WHERE address_id = ?',
        [req.body.address, req.body.address2, req.body.district, req.body.city_id, req.body.post_code, req.body.phone, req.body.location, req.body.last_update, req.body.address_id],(error, dbres)=> {
            if(!error) {
                res.send(`Changed ${dbres.changedRows}row (s)`)
            } else {
                console.log(' DAO ERROR')
                res.send('Error updating record')
            }
        })
    }
}

module.exports = addressDao