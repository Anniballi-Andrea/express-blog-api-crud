const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./Routes/posts')


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('welcome in my blog')
})

app.use('/posts', postsRouter)


app.listen(PORT, () => {
    console.log("hello")
})