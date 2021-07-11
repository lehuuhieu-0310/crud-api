
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        jwt.verify(token, process.env.SECRET_BCRYPT_KEY, async (err, decoded) => {
            if (err) {
                return res.status(500).json(err)
            } else {
                await User.findOne({ _id: decoded.id, token })
                    .then(() => next())
                    .catch(err => res.status(500).json(err))
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { auth }