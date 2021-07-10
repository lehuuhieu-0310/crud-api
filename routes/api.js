
const express = require('express')
const router = express.Router()

const Book = require('../models/Book')

// create a book
// api/book/addnew
router.post('/book/addnew', async (req, res) => {
    await Book.create(req.body)
        .then(book => res.status(201).json(book))
        .catch(err => res.status(500).json(err))
})

// get all book
// api/book
router.get('/book', async (req, res) => {
    await Book.find({})
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json(err))
})

// get by id
// api/book/:id
router.get('/book/:id', async (req, res) => {
    const id = req.params.id
    await Book.findById(id)
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json(err))
})

// update
// api/book/update/:id
router.put('/book/update/:id', async (req, res) => {
    const id = req.params.id
    await Book.findByIdAndUpdate(id, req.body)
        .then(() => res.status(200).json('update successfully'))
        .catch(err => res.status(500).json(err))
})

// delete
// api/book/delete/:id
router.delete('/book/delete/:id', async (req, res) => {
    const id = req.params.id
    await Book.findByIdAndDelete(id)
        .then(() => res.status(200).json('delete successfully'))
        .catch(err => res.status(500).json(err))
})

module.exports = router