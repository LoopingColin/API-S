const express = require('express')
const fetch = (...args) => import ('node-fetch').then(({default:fetch}) => fetch(...args))
const router = express.Router()
const PORT = process.env.PORT || 3000

router.use(express.static('public'))

// VIEWS
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Movie Homepage',
        name: 'Movie Homepage'
    })
})

router.get('/movie', (req, res)=> {
    let search = req.query.search

    if(search) {
        URL = `http://localhost:${PORT}/api/movie?search=${search}`
    } else {
        URL = `http://localhost:${PORT}/api/movie`
    }
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/movie', {
                title: 'All Movies',
                name: 'All Movies',
                data
            })
        })
})

router.get('/movie/:id', (req, res)=> {
    const id = req.params.id
    const URL = `http://localhost:${PORT}/api/movie/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {res.render('pages/movie-single',
             {
                 title: `${data.title}`,
                 name: `${data.title}`,
                 data
             }
            )}
        })
})

router.get('/addMovie', (req, res)=> {
    res.render('pages/addMovie', {
        title: 'Add Movie',
        name: 'Add Moive'
    })
})



// API
// All ROUTES
router.get('/api', (req, res)=> {
    res.json({
        'All Movies': `http://localhost:${PORT}/api/movie`,
        'All Performers': `http://localhost:${PORT}/api/performer`,
        'All Producers': `http://localhost:${PORT}/api/producer`,
        'All Directors': `http://localhost:${PORT}/api/director`,
        'All Genres': `http://localhost:${PORT}/api/genre`
    })
})

router.use('/api/movie', require('./api/movieRoutes'))
router.use('/api/performer', require('./api/performerRoutes'))
router.use('/api/producer', require('./api/producerRoutes'))
router.use('/api/director', require('./api/directorRoutes'))
router.use('/api/genre', require('./api/genreRoutes'))

router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>404 Error This page does not exist!</h1>')
    }
})

module.exports = router