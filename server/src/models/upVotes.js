const mongoose = require('mongoose')

const upVoteSchema = mongoose.Schema(
  {
    userId: ObjectId,
    postId: ObjectId
  },
  {
    timestamps: false 
  }
)
module.exports = mongoose.model('upVote', upVoteSchema)
