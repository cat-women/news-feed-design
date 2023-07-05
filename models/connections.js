const {ObjectId} = require('mongodb')

let
mongooseLocal = require('mongoose'),
{Schema} = mongooseLocal


module.exports = function(conn) {
  const Connections = new Schema({
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
    },
    date: {
      type: Date,
      default: () => {
        return new Date()
      }
    }
  })
  conn.model('Connections', Connections)
}
