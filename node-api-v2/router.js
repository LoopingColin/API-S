const express = require('express')
const router = express.Router()
// const fetch = import('node-fetch')



const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))


const port = process.env.PORT || 3000

router.use(express.static('public'))

router.get('/home', (req, res) => {
    res.render('pages/home', {
        title: 'Home',
        name: 'Sakila Home Page'
    })
})

router.get('/actor', (req, res) => {
    const url = `http://localhost:${port}/api/actor`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/actor', {
                title: 'Actor',
                name: 'Actors',
                data
            })
        })
})

router.get('/film', (req, res) => {
    const url = `http://localhost:${port}/api/film`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/film', {
                title: 'Films',
                name: 'Films',
                data
            })
        })
})


router.get('/film/:id', (req, res) => {
    const id = req.params.id
    const url = `http://localhost:3000/api/film/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/single_film', {
                title: `${data.title}`,
                name: `${data.title}`,
                data
            })
        })
})

router.get('/customer', (req, res) => {
    const url = `http://localhost:${port}/api/customer`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/customer', {
                title: 'Customer',
                name: 'Customers',
                data
            })
        })
})

router.get('/rental', (req, res) => {
    const url = `http://localhost:${port}/api/rental`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/rental', {
                title: 'Rental',
                name: 'Rentals',
                data
            })
        })
})


router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>404 ERROR - This page does not exist</h1>')
    }
})

module.exports = router