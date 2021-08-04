
const mongoose = require('mongoose')
try {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    console.log('Connect successfully')
} catch (err) {
    console.log('Connect Failure')
}