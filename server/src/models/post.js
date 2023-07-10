const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

const postSchema = mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: 'User'
    },
    postText: String,
    postImage: [String],
    upVoteCount: {
      type: Number,
      default: 0
    },
    postCommentsCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
postSchema.index({ userId: 1 })

module.exports = mongoose.model('Posts', postSchema)
