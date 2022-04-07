const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default:fetch})=> fetch(...args))

// All Episodes
// localhost:3000/episodes
router.get('/', (req, res)=> {
    const URL = `https://api.sampleapis.com/baseball/eraSingleSeason`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/baseball', {
                title: 'All SingleSeason',
                name: 'SingleSeason',
                data
            })
        })
})

// single-season
// localhost:3000/season:/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/baseball/eraSingleSeason/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {
                res.render('pages/single-season', {
                    title: `${data.player}`,
                    name: `${data.player}`,
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