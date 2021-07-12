
const mongoose = require('mongoose')
try {
    mongoose.connect('mongodb://localhost:27017/ManageBookAPI', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    console.log('Connect successfully')
} catch (err) {
    console.log('Connect Failure')
}