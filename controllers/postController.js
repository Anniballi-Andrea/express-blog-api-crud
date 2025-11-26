const posts = require("../data/posts")

const index = (req, res) => {
    res.json(posts)
}

const show = (req, res) => {
    const id = Number(req.params.id)



    const filtredPost = posts.find(post => post.id === id)

    if (!filtredPost) {
        res.status(404)
        return res.json({
            error: "Not found",
            message: "post non trovato"
        })
    }

    res.json(filtredPost)

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