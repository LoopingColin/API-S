const express = require('express')
const server = express()
const helmet = require('helmet')
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3000

// HANDLE SECURITY
server.use(helmet())
server.use(express.json())
server.use('/api', router)

// ALL ROUTES 
server.get('/', (req, res)=> {
    res.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Countries': `http://localhost:${PORT}/api/country`,
        'All Address': `http://localhost:${PORT}/api/address`,
        'All Categories': `http://localhost:${PORT}/api/category`,
        'All Cities': `http://localhost:${PORT}/api/city`,
        'All Staff': `http://localhost:${PORT}/api/staff_list`
    })
})

server.listen(PORT, ()=> {
    console.log(`It's the Port ${PORT} for me..`)
})