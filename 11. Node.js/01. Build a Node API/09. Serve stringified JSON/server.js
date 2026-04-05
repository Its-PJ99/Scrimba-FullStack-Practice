import http from 'node:http'
 
const PORT = 8000

const server = http.createServer((req, res) => {

/*
Challenge:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/

  if (req.url === '/api' && req.method === 'GET') {
    res.end('This is from the server')
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
