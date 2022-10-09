const express = require('express')
const Post = require('./../models/post')
const router = express.Router()

router.get('/newPost' , (req , res ) =>{
    res.render('posts/newPost',{post: new Post()})
})

router.get('/:id', (req,res) => {
    res.send(req.params.id)
})

router.post('/', async(req,res) => {
    let post = new Post({
        title: req.body.title,
        description: req.body.description,
        article: req.body.article
    })
    try{
      post = await post.save()
      res.redirect(`/posts/${post.id}`)
    } catch(err){
        console.log(err)
        res.render('posts/new', {post : post})
    }
})

module.exports = router 