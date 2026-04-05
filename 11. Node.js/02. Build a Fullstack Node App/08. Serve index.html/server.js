import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'

const PORT = 8000

const __dirname = import.meta.dirname

/* Make any changes needed to the code below. */
const server = http.createServer((req, res) => {
    serveStatic(__dirname)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
