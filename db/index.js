
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ManageBook', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(res => console.log('Connect successfully'))
    .catch(err => console.log('Connect Failure'))