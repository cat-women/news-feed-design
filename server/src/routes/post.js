const express = require('express')
const PostController = require('../controllers/postController')
const { upload } = require('../middleware/imageHandler')

const post = new PostController()
const router = express.Router()

router.post('/', upload.array('images', 12), post.createPost)
router.delete('/:id', post.deletePost)
router.get('/', post.getAllPost)
router.get('/:id', post.getPostById)

module.exports = router
    