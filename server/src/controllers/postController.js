const Post = require('../models/post.js')
const { deleteImage } = require('../middleware/imageHandler')

class PostController {
  createPost = async (req, res, next) => {
    const { userId, postText } = req.body

    try {
      await Post.create({
        userId,
        postText,
        postImage: req.images
      })
      res.status(200).json({ msg: 'new post created' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
  getPostById = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id)
      if (!post) res.status(404).json({ msg: 'Post not found' })

      res.status(200).json(post)
    } catch (error) {}
  }

  getAllPost = async (req, res, next) => {
    const posts = await Post.find()
    res.status(200).json(posts)
  }

  deletePost = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id)
      if (!post) res.status(404).json({ msg: 'Post not found' })

      deleteImage(post.postImage)

      await post.remove()

      res.status(200).json({ msg: 'Post deleted' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
}

module.exports = PostController
