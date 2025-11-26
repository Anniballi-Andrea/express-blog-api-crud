

const index = (req, res) => {
    res.send(`your bacheca with all posts`)
}

const show = (req, res) => {
    res.send(`your searching a single post with id: ${req.params.id}`)
}

const store = (req, res) => {
    res.send(`youre adding a new object in all posts`)
}

const update = (req, res) => {
    res.send(`your trying completly modify a single post with id: ${req.params.id}`)
}

const modify = (req, res) => {
    res.send(`your trying modify a part of a single post with id: ${req.params.id}`)
}

const destroy = (req, res) => {
    res.send(`your trying delete a single post with id: ${req.params.id}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}