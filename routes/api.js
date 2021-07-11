
const express = require('express')
const router = express.Router()

const Book = require('../models/Book')
const { auth } = require('../middlewares/auth')

// create a book
// api/book/addnew
router.post('/book/addnew', auth, async (req, res) => {
    await Book.create(req.body)
        .then(book => res.status(201).json({ data: book }))
        .catch(err => res.status(500).json(err))
})

// get all book
// api/book
router.get('/book', auth, async (req, res) => {
    await Book.find({})
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json(err))
})
// get by id
// api/book/:id
router.get('/book/:id', auth, async (req, res) => {
    const id = req.params.id
    await Book.findById(id)
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json(err))
})

// update
// api/book/update/:id
router.put('/book/update/:id', auth, async (req, res) => {
    const id = req.params.id
    await Book.findByIdAndUpdate(id, req.body)
        .then((book) => res.status(200).json(`update id: ${book._id} successfully`))
        .catch(err => res.status(500).json(err))
})

// delete
// api/book/delete/:id
router.delete('/book/delete/:id', auth, async (req, res) => {
    const id = req.params.id
    await Book.findByIdAndDelete(id)
        .then((data) => res.status(200).json(`delete id: ${data._id} successfully`))
        .catch(err => res.status(500).json(err))
})

module.exports = router