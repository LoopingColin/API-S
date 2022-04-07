const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// api
router.get('/', (req, res)=> {
    res.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost:${PORT}/api/actor`
    })
})
// api/film
router.use('/film', require('./api/filmRoutes'))

module.exports = router