// const con = require('../../config/dbconfig')

// const actorDao = {
//     table: 'actor',

//     create: (req, res)=> {
//         if(Object.keys(req.body).length === 0) {
//             res.json({
//                 "error": true,
//                 "message": "No fields to create."
//             })
//         } else {
//             const fields = Object.keys(req.body)
//             const value = Object.values(req.body)

//             con.execute(
//                 `INSERT INTO film SET ${fields.join(' = ?, ')} = ?`,
//                 values,
//                 (error, dbres)=> {
//                     if(!error) {
//                         res.send(`Last id: ${dbres.insertId}`)
//                     } else {
//                         console.log(' DAO ERROR', error)
//                         res.send('Error creating record')
//                     }
//                 }
//             )
//         }
//     },