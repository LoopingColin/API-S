const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default:fetch})=> fetch(...args))

// All Episodes
// localhost:3000/episodes
router.get('/', (req, res)=> {
    const URL = `https://api.sampleapis.com/avatar/episodes`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/episodes', {
                title: 'All Episodes',
                name: 'Episodes',
                data
            })
        })
})

// single-episodes
// localhost:3000/episodes:/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/avatar/episodes/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {
                res.render('pages/single-episodes', {
                    title: `${data.Title}`,
                    name: `${data.Title}`,
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