const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {
    userId: ObjectId,
    postId: ObjectId,
    parentId: ObjectId,
    commentText: String,
    commentImage: String,
    upVoteCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
module.exports = mongoose.model('Comments', commentSchema)
