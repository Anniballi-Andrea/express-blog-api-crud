const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send(`your bacheca with all posts`)
})

router.get('/:id', (req, res) => {
    res.send(`your searching a single post with id: ${req.params.id}`)
})

router.post('/', (req, res) => {
    res.send(`youre adding a new object in all posts`)
})

router.put('/:id', (req, res) => {
    res.send(`your trying completly modify a single post with id: ${req.params.id}`)
})

router.patch('/:id', (req, res) => {
    res.send(`your trying modify a part of a single post with id: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`your trying delete a single post with id: ${req.params.id}`)
})


module.exports = router
