const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

const connectionSchema = mongoose.Schema(
  {
    requestorId: {
      type: ObjectId,
      ref: 'User'
    },
    receiverId: {
      type: ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      default: 'pending'
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

module.exports = mongoose.model('Connections', connectionSchema)
