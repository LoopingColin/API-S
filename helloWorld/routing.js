const http = require('http')
const port = process.env.PORT || 3000
const fs = require('fs')

function serveStaticFiles(res, path, contentType, responseCode = 200) {
    // do stuff
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Internal Error')
        }

        res.writeHead(responseCode, { 'Content-Type': contentType })
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    // do stuff
    // normalize url by removing querystring, optional trailing slash, and making it lowercase

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch (path) {
        case '':
            // res.writeHead(200,{
            //     'Content-Type': 'text/plain'})
            //     res.end('Homepage')
            serveStaticFiles(res, '/public/home.html', 'text/html')
            break
        case '/about':
            // res.writeHead(200,{'Content-Type': 'text/plain'})
            // res.end('About')
            serveStaticFiles(res, '/public/about.html', 'text/html')
            break
        case 'img':
            serveStaticFiles(res, '/media/pizza2.jpg', 'image/jpg')
            break
        default:
            // res.writeHead(404, {
            //     'Content-Type': 'text/plain'
            // })
            // res.end('Not Found')
            serveStaticFiles(res, '/public/404.html', 'text/html', 404)
            break
    }
})


server.listen(port, () => console.log(`server started on port ${port};` + 'press Ctrl+C to terminate...'))