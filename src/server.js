const app = require('./app')
require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

app.listen(process.env.SERVER_PORT, () => {
    if (process.env.SERVER_PORT == '8080') {
        console.log('servidor rodando em ambiente de desenvolviment e teste')
    } else {
        console.log('servidor rodando em ambiente de produção')
    }
})
