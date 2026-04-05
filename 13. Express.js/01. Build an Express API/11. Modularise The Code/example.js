import express from 'express'

const app = express()

const apiRouter = express.Router()

const productsController = (req, res) => {
    res.json({data: 'products'})
}

const servicesController = (req, res) => {
    res.json({data: 'service'})
}

apiRouter.get('/api/products', productsController)

apiRouter.get('/api/services', servicesController)

app.use('/api', apiRouter)

app.listen(8000, () => console.log('listening 8000'))