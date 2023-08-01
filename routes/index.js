const express = require('express');
const router = express.Router();
const blogsController = require('./../controllers/blogs')

router.get('/', blogsController.getPosts);
router.get('/add', blogsController.creationPost);
router.post('/add/new/', blogsController.addPost);


module.exports = router;
