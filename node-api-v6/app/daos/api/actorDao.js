const con = require('../../config/dbconfig')
const daoCommon = require('../daoCommon')

const actorDao = {
    ...daoCommon,

    create: (req, res)=> {
        con.query(
            'INSERT INTO actor SET ?',
            req.body,
            (error, dbres)=> {
                if(!error) {
                    res.send(`Last id: ${dbres.insertId}`)
                } else {
                    console.log('DAO ERROR', error)
                    res.send('Error creating record')
                }
            }
        )
    },

    update: (req, res)=> {
        con.query('UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?',
        [req.body.first_name, req.body.last_name, req.body.actor_id], (error, dbres)=> {
            if(!error) {
                res.send(`Changed ${dbres.changedRows} row(s)`)
            } else {
                console.log(' DAO ERROR')
                res.send('Error updating record')
            }
        })
    }
}

module.exports = actorDao