const express = require('express')
const server = express()
const helmet = require('helmet')
const router = require('./app/routes/router')

const PORT = process.env.PORT || 3000

// increase security
server.use(helmet())
server.use(express.json())
server.use('/api', router)

// ALL ROUTES
server.get('/', (req, res)=> {
    res.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Countries': `http://localhost:${PORT}/api/country`,
        'All Customers': `http://localhost:${PORT}/api/customer`,
    })
})

server.listen(PORT, ()=> {
    console.log(`Server on port: ${PORT}`)
})