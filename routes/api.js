
const express = require('express')
const router = express.Router()

const Book = require('../models/Book')

//create a book
router.post('/book/addnew', async (req, res) => {
    const book = req.body
    await Book.create(book)
        .then(book => res.status(201).send(book))
        .catch(err => res.status(400).send(err))
})

//get all book
router.get('/book/list', async (req, res) => {
    await Book.find({})
        .then(book => res.status(200).send(book))
        .catch(err => res.status(400).send(err))
})

//get by id
router.get('/book/:id', async (req, res) => {
    const id = req.params.id
    await Book.findById(id)
        .then(book => res.status(200).send(book))
        .catch(err => res.status(404).send(err))
})

module.exports = router