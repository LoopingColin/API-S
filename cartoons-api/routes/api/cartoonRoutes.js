const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default:fetch}) => fetch(...args))

// All Cartoons
// localhost:3000/cartoons
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/cartoons/cartoons2D'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/cartoons', {
                title: 'All Cartoons',
                name: 'Cartoon List',
                data
            })
        })
})

// single-cartoon
// localhost:3000/cartoons/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL= `https://api.sampleapis.com/cartoons/cartoons2D/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {

                res.render('pages/single-cartoon', {
                    title: `${data.title}`,
                    name: `${data.title}`,
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