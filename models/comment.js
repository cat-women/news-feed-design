const {ObjectId} = require('mongodb')

let
    mongooseLocal = require('mongoose'),
    {Schema} = mongooseLocal


module.exports = function(conn) {

    const Comment = new Schema({
        userId: ObjectId,
        postId: ObjectId,
        parentId: ObjectId,
        commentText: String,
        commentImage: String,
        upVoteCount: {
            type: Number,
            default: 0
        },
        date: {
            type: Date,
            default: () => {
                return new Date()
            }
        }
    })
    conn.model('Comment', Comment)
}
