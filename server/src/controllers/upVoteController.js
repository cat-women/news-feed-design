const UpVote = require('../models/upVotes')
const Post = require('../models/post')

class voteController {
  addVote = async (req, res, next) => {
    const userId = req.user?.id
    const postId = req.params.id
    let vote = Number(req.params.query) === 1 ? 1 : -1
    try {
      let upVote = await UpVote.findOne({
        userId: userId,
        postId: postId
      }).exec()
      if (!upVote)
        await UpVote.create({
          userId,
          postId
        })

      await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { upVoteCount: vote } }
      )
      res.status(200).json({ msg: 'Success' })
    } catch (error) {
      console.log(error)
      next()
    }
  }

  update = async (req, res, next) => {
    const value = req.body.value
    try {
      await UpVote.remove({ _id: req.params.id })
      await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { upVoteCount: value } }
      )
      res.status(200).json({ msg: 'updated' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
}

module.exports = voteController
