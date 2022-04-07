const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const categoryDao = {
    ...daoCommon,

    create: (req, res) => {
        con.query(
            `INSERT INTO category SET`,
            req.body,
            (error, dbres) => {
                if(!error) {
                    res.send(`Last id: ${dbres.insertId}`)
                } else {
                    console.log(' DAO ERROR', error)
                    res.send('Error creating record')
                }
            }
        )
    },

    update: (req, res) => {
        con.query('UPDATE category = ?, name = ? last_update = ? WHERE category_id = ?',[req.body.category, req.body.name, req.body.last_update, req.body.category_id], (error, dbres)=> {
            if(!error) {
                res.send(`Changed ${dbres.changedRows}row(s)`)
            } else {
                console.log(' DAO ERROR')
                res.send('Error updating record')
            }
        })
    }
}

module.exports = categoryDao