import express from 'express'

const app = express()

/*
Challenge: 
1. Update the code so a GET request to api/metals/gold
    logs an object {category: ‘metals’, type: ‘gold’}

But a GET request to api/crypto/eth
    logs an object {category: crypto-name, type: eth}
*/

app.get('/api/crypto-name/:currency', (req, res) => {

    console.log(req.params)
    res.json()
})

app.listen(8000, () => console.log('listening 8000'))