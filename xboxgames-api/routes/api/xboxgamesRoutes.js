const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default:fetch})=> fetch(...args))

// All XboxGames
// localhost:3000/xboxgames
router.get('/', (req, res)=> {
    const URL = `https://api.sampleapis.com/xbox/games`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/xboxgames', {
                title: 'All XboxGames',
                name: 'XboxGames',
                data
            })
        })
})

// single-xboxgames
// localhost:3000/xboxgames:/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/xbox/games/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {
                res.render('pages/single-xboxgames', {
                    title: `${data.name}`,
                    name: `${data.name}`,
                    data
                })
            } else {
                res.render('pages/404', {
                    title: '404 Error - Page not found',
                    name: '404 Error'
                })
            }
        })
        .catch(error => {
            console.log('ERROR', error)
        })
})

module.exports = router