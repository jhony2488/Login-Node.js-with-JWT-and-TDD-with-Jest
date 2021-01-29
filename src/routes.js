const express = require('express')
const { User } = require('./app/models')

const routes = express.Router()

User.create({
    name: 'Jhonata Vinicius',
    email: 'jhon.araujo2488@gmail.com',
    password_hash: '65675675675656756757575',
})
    .then((user) => {
        console.log('success', user.toJSON())
    })
    .catch((error) => {
        console.log(error)
    })

module.exports = routes
