const express = require('express')
const CommentController = require('../controllers/commentController')
const { upload } = require('../middleware/commentImageHandler')
const { authUser } = require('../middleware/auth')

const comment = new CommentController()
const router = express.Router()

router.post('/:id', authUser, upload.single('image'), comment.createComment)
router.delete('/:id', authUser, comment.deleteComment)
router.get('/', authUser, comment.getAllComments)
router.get('/:id', authUser, comment.getCommentById)

module.exports = router
