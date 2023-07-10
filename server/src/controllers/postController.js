const Post = require('../models/post.js')

class PostController {
  createPost = async (req, res, next) => {
    console.log(req.images)
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
}

module.exports = PostController
