const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    res.render('home', {
        title: 'home',
        name: 'home'
    })
})

router.get('/form', (req, res)=> {
    res.render('form', {
        title: 'form',
        name: 'form'
    })
})

module.exports = router