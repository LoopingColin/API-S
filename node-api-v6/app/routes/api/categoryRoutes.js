const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/categoryDao')

router.get('/', (req, res)=> {
    // dao takes in response
    dao.findAll(res, 'category')
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'category', req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router
