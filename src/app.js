const express = require('express')

class AppController {
  constructor() {
    this.express = express()

    this.middleware()
  }
  middleware() {
    this.express.use(express.json())
  }
  routes() {
    this.express.use(require('./routes'))
  }
}
exports.module = new AppController().express
