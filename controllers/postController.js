const posts = require("../data/posts")



const index = (req, res) => {

    if (req.query.tags) {

        let tag = req.query.tags
        tag = tag[0].toUpperCase() + tag.slice(1)

        const filtredPost = posts.filter(el => el.tags.includes(tag))

        return res.json(filtredPost)
    }


    res.json(posts)



}

const show = (req, res) => {
    const id = Number(req.params.id)



    const post = posts.find(post => post.id === id)

    if (!post) {
        res.status(404)
        return res.json({
            error: "Not found",
            message: "post non trovato"
        })
    }

    res.json(post)

}

const store = (req, res) => {
    console.log(req.body)
    const newId = posts[posts.length - 1].id + 1
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
    }
    posts.push(newPost)
    res.status(201)
    res.send(newPost)

}

const update = (req, res) => {
    res.send(`your trying completly modify a single post with id: ${req.params.id}`)
}

const modify = (req, res) => {
    res.send(`your trying modify a part of a single post with id: ${req.params.id}`)
}

const destroy = (req, res) => {
    const id = Number(req.params.id)

    const post = posts.find(post => post.id === id)

    if (!post) {
        res.status(404)
        return res.json({
            error: "Not found",
            message: "post non trovato"
        })
    }

    posts.splice(posts.indexOf(post), 1)




    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}