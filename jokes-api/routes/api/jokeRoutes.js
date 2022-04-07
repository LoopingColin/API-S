const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default:fetch}) => fetch(...args))

// localhost:3000/jokes
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/jokes/goodJokes'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/jokes', {
                title: 'A Lot of Jokes',
                name: 'A Lot of Jokes',
                data
            })
        })
})

// localhost:3000/type/:type
router.get('/type/:type', (req, res)=> {
    const type = req.params.type
    const URL = 'https://api.samplepis.com/jokes/goodJokes'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            
            const typeArr = []

            data.forEach(item => {
                if(item.type == type) {
                    typeArr.push(item)
                }
            })
            return typeArr
        })
        .then(typeArr => {
            res.render('pages/jokes', {
                title: type,
                name: `${type} jokes`,
                data: typeArr
            })
        })
})
// localhost:3000/jokes/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/jokes/goodJokes/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/jokes-single', {
                title: `${data.setup}`,
                name: `${data.setup}`,
                data
            })
        })
})

module.exports = router