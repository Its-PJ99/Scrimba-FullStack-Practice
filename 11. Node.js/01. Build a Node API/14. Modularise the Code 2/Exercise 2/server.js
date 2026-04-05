import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

/*
Challenge:
  1. Add an 'api/country/<country>' route.
*/


  if (req.url === '/api' && req.method === 'GET') {

    sendJSONResponse(res, 200, destinations)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

    const continent = req.url.split('/').pop()
    const filteredData = destinations.filter((destination) => {
      return destination.continent.toLowerCase() === continent.toLowerCase()
    })
    sendJSONResponse(res, 200, filteredData)

  } else {

    res.setHeader('Content-Type', 'application/json')
    sendJSONResponse(res, 404, ({
      error: "not found",
      message: "The requested route does not exist"
    }))   

  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
