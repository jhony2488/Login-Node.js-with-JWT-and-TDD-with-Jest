const express = require('express')
const SessionController = require('./app/controllers/SessionControllers')

const routes = express.Router()

routes.post('/sessions', SessionController.store)

module.exports = routes

