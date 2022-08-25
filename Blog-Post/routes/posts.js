const express = require('express')
const Post = require('./../models/post')
const router = express.Router()

router.get('/newPost' , (req , res ) =>{
    res.render('posts/newPost')
})

router.get('/:id', (req,res) => {

})

router.post('/', async(req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        article: req.body.article
    })
    try{
      post = await aritcle.save()
      res.redirect('/posts/${post.id}')
    } catch(err){
        res.render('posts/new', {post : post})
    }
    
})
module.exports = router 