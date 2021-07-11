
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../models/User')


// /user/create
router.post('/create', async (req, res) => {
    await User.create(req.body)
        .then((user) => res.status(201).json({ data: user }))
        .catch(err => res.status(500).json(err))
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    await User.findOne({ username })
        .then((user) => {
            if (user.password == password) {
                user.token = createToken(user._id)
                user.save()
                req.header.Authorization = user.token
                res.status(200).json({ data: { token: user.token } })
            } else {
                res.status(404).json('username or password invalid')
            }
        })
        .catch(err => res.status(500).json(err))
})

const createToken = id => {
    const token = jwt.sign({ _id: id }, process.env.SECRET_BCRYPT_KEY)
    return token
}

module.exports = router