import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

/*
  Challenge:
  1. Complete the two lines of code below.
     hint.md for help!
*/

  const urlObj = // Use the URL constructor and pass in the relative and base urls.

  const queryObj = // Use the fromEntries() method on the Object class .
                   // What do you need to pass in? 

  console.log(queryObj)


  if (req.url === '/api' && req.method === 'GET') {

    sendJSONResponse(res, 200, destinations)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

    const continent = req.url.split('/').pop()
    const filteredData = getDataByPathParams(destinations, 'continent', continent)
    sendJSONResponse(res, 200, filteredData)

  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {

    const country = req.url.split('/').pop()
    const filteredData = getDataByPathParams(destinations, 'country', country)
    sendJSONResponse(res, 200, filteredData)

  } 
  
  else {

    res.setHeader('Content-Type', 'application/json')
    sendJSONResponse(res, 404, ({
      error: "not found",
      message: "The requested route does not exist"
    }))   

  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
