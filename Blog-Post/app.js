const express = require('express')
const mongoose = require ('mongoose')
const post = ('./models/post')
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

mongoose.connection
.once('open', () => console.log("Connected"))
.on('error', error => {
    console.log(error)
})

//Geting the index page
app.get('/',async(req, res) => {
    const posts = await post.find()
    res.render('posts/index' , { posts : posts})
})

//Setting up the port to listen from
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})