const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default:fetch}) => fetch(...args))

// All Drama
// localhost:3000/drama
router.get('/', (req, res)=> {
    const URL = `https://api.sampleapis.com/movies/drama`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/drama', {
              title: 'All Dramas',
              name: 'Dramas',
              data  
            })
        })
})

// single-drama
// localhost:3000/drama/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/movies/drama/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {

                res.render('pages/single-drama', {
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