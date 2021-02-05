const express = require('express')
const SessionController = require('./app/controllers/SessionControllers')
const authMiddleware = require('./app/middleware/auth')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.json({ message: 'version 1.0.0' })
})

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
    res.status(200).send()
})

module.exports = routes
