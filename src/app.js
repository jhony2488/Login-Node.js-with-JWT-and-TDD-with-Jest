const express = require('express')

class AppController {
    constructor() {
        this.express = express()

        this.middleware()
        this.routes()
        this.server()
    }

    middleware() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }
    server() {
        return this.express.listen(8080, () => {
            console.log('servidor funcionando')
        })
    }
}
exports.module = new AppController()
