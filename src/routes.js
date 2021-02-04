const express = require('express')
const SessionController = require('./app/controllers/SessionControllers')
const authMiddleware = require('./app/middleware/auth')

const routes = express.Router()

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
    res.status(200).send()
})

module.exports = routes
