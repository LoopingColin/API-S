const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const router = require('./routes/router')
server.use('/', router)
server.set('view engine', 'ejs')

server.use(bodyParser.urlencoded({
    extended: true
}))

server.use(bodyParser.json())

// post data
server.post('/formProcess', (req, res)=> {
    console.log(req.body)
    res.render('process-page', {
        title: 'Thank you for submitting',
        name:  'form Process',
        req: req.body
    })
    // res.end()
})


server.listen(PORT, ()=> console.log(`PORT: ${PORT} SLAPS!!`))