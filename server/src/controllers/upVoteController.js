const UpVote = require('../models/upVotesjs')
const Post = require('../models/post.js')

class voteController {
  addVote = async (req, res, next) => {
    const { userId, postId } = req.body
    try {
      await UpVote.create({
        userId,
        postId
      })

      await Post.findOneAndUpdate({ _id: postId }, { $inc: { upVoteCount: 1 } })
      res.status(200).json({ msg: 'Success' })
    } catch (error) {
      console.log(error)
      next()
    }
  }

  removeVote = async (req, res, next) => {
    try {
      await UpVote.remove({ _id: req.params.id })
      await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { upVoteCount: -1 } }
      )
      res.status(200).json({ msg: 'Deleted' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
}
