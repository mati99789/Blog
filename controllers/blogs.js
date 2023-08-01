const Post = require("../models/Posts");

exports.getPosts = (req, res, next) => {
    Post.findAll().then((posts) => {
        res.render('index', { posts: posts });
    }).catch(error => {
        console.log(error)
    })
}

exports.addPost = (req, res, next) => {
    const title = req.body.title
    const content = req.body.content
    const timestamp = new Date()
    Post.create({
        title,
        content,
        timestamp
    }).then(() => {
        res.redirect('/')
    }).catch(error => {
        console.log(error)
    })
}

exports.creationPost = (req,res, next) => {
    res.render('add-post');
}
