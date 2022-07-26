
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log('Connect Successfully'))
    .catch((err) => console.log(`Connect Failure: ${err}`))