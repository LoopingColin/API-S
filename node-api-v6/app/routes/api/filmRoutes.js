const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/filmDao')

router.get('/', (req, res)=> {
    // dao takes in response
    dao.findAll(res, 'film')
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'film', req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router