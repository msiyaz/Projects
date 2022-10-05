const express = require('express')
const mongoose = require ('mongoose')

const app = express()
const postRouter = require('./routes/posts')
app.set('view engine', 'ejs')

app.use('/post' , postRouter)

//setting up the routes
app.use(express.urlencoded({ extended : false}))
app.use('/posts', postRouter)

//setting up the database
mongoose.connect('mongodb://localhost:27017/blogWebsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/',(req, res) => {
    const posts = [{
        title:'Test Post',
        createdAt: new Date(),
        description: 'Test Description'
    }, {
        title:'Test Post 1',
        createdAt: new Date(),
        description: 'Test Description 1'
    }]
    res.render('posts/index' , { posts : posts})
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})