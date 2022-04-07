const express = require('express')
const { route } = require('../../../recipes-api/routes/api/recipesRoutes')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default:fetch})=> fetch(...args))

// All Games
// localhost:3000/games
router.get('/', (req, res)=> {
    const URL = `https://api.sampleapis.com/playstation/games`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/games', {
                title: 'All Games',
                name: 'Games',
                data
            })
        })
})

// single-games
// localhost:3000/games:/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/playstation/games/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {
                res.render('pages/single-games', {
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