
const express = require('express')
require('dotenv').config()
require('./db/index')

const app = express()
const port = process.env.PORT

const route = require('./routes/index')

app.use(express.json())

route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})