const express = require('express')
const PostController = require('../controllers/postController')
const { upload } = require('../middleware/imageHandler')
const { authUser } = require('../middleware/auth')

const post = new PostController()
const router = express.Router()

router.post('/', authUser, upload.array('images', 12), post.createPost)
router.delete('/:id', authUser, post.deletePost)
router.get('/', authUser, post.getAllPost)
router.get('/:id', authUser, post.getPostById)

module.exports = router
