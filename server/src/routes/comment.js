const express = require('express')
const CommentController = require('../controllers/commentController')
const { upload } = require('../middleware/commentImageHandler')

const comment = new CommentController()
const router = express.Router()

router.post('/:id', upload.single('image'), comment.createComment)
router.delete('/:id', comment.deleteComment)
router.get('/', comment.getAllComments)
router.get('/:id', comment.getCommentById)

module.exports = router
