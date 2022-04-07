const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default:fetch})=> fetch(...args))

// All SwitchGames
// localhost:3000/switchgames
router.get('/', (req, res)=> {
    const URL = `https://api.sampleapis.com/switch/games`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/switchgames', {
                title: 'All SwitchGames',
                name: 'SwitchGames',
                data
            })
        })
})

// single-switchgames
// localhost:3000/switchgames:/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/switch/games/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >=1) {
                res.render('pages/single-switchgames', {
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