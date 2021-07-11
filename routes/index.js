
const apiRouter = require('./api')
const userRouter = require('./user')

function route(app) {
    app.get('/', (req, res) => {
        res.send('Hello World')
    })
    app.use('/api', apiRouter)
    app.use('/user', userRouter)
}

module.exports = route