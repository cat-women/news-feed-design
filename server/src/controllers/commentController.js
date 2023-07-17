const Comment = require('../models/comment.js')
const Post = require('../models/post.js')
const { ObjectId } = require('mongodb')

const { deleteImage } = require('../middleware/commentImageHandler')

class CommentController {
  createComment = async (req, res, next) => {
    const postId = req.params.id
    const userId = new ObjectId('64afd500fcb014b79efd3751')
    const { parentId, commentText } = req.body

    try {
      await Comment.create({
        userId,
        postId,
        parentId: parentId ? parentId : null,
        commentText,
        commentImage: req.images ? req.images : ''
      })

      await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { postCommentsCount: 1 } }
      )

      res.status(200).json({ msg: 'new Comment created' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
  getAllComments = async (req, res, next) => {
    try {
      const comments = await Comment.find()

      res.status(200).json(comments)
    } catch (error) {
      console.log(error)
      next()
    }
  }
  getCommentById = async (req, res, next) => {
    try {
      const comment = await Comment.findById(req.params.id)
      if (!comment) res.status(404).json({ msg: 'Comment not found' })
      res.status(200).json({ data: comment })
    } catch (error) {
      console.log(error)
      next()
    }
  }

  deleteComment = async (req, res, next) => {
    try {
      const comment = await Comment.findById(req.params.id)
      if (!comment) res.status(404).json({ msg: 'Comment not found' })

      deleteImage(comment.postImage)

      await Post.findOneAndUpdate(
        { _id: comment.postId },
        { $inc: { postCommentsCount: -1 } }
      )
      await comment.remove()

      res.status(200).json({ msg: 'comment deleted' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
}
module.exports = CommentController
