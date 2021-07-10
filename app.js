
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

const route = require('./routers/index')

route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})