const express = require('express')
const PostController = require('../controllers/postController')
const upload = require('../middleware/imageHandler')

const post = new PostController()
const router = express.Router()

router.post('/', upload.array('images', 12), post.createPost)

module.exports = router
