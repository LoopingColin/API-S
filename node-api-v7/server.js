const express = require('express')
const server = express()

// IMPORT SECURITY 
const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express.json())

// const server = express().use.helmet()
// // use(cors()).use(express.json())
const router = require('./app/routes/router')
server.use('/api', router)

const PORT = process.env.PORT || 3000
server.listen(PORT, ()=> {
    console.log(`Not the port ${PORT} running...`)
})