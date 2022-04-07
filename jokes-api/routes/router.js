const express = require('express')

const router = express.Router()

// static files 
router.use(express.static('public'))

const jokeRoutes = require('./api/jokeRoutes')

router.use('/jokes', jokeRoutes)

// home route
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'Jokes'
    })
})

// error route
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>404 This Page does nto exist!</h1>')
    }
})

module.exports = router