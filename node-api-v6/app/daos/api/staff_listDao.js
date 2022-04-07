const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const staff_listDao = {
    ...daoCommon,

    create:(req, res) => {
        con.query(
            `INSERT INTO staff_list ?`,
            req.body,
            (error, dbres) => {
                if(!error) {
                    res.send(`Last id: ${dbres.insertId}`)
                } else {
                    console.log(`DAO ERROR`, error)
                    res.send('Error creating record')
                }
            }
        )
    },

    update: (req, res) => {
        con.query('UPDATE staff_list = ?, name = ? address = ? zip code = ? phone = ? city = ? country = ? sid = ? WHERE id = ?',
        [req.body.staff_list, req.body.name, req.body.address, req.body.zipcode, req.body.phone, req.body.city, req.body.country, req.body.sid, req.body.id], (error, dbres)=> {
            if(!error) {
                res.send(`Changed ${dbres.changedRows}row(s)`)
            } else {
                console.log(' DAO ERROR')
                res.send('Error updating record')
            }
        })
    }
}

module.exports = staff_listDao