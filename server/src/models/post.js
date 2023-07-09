const {ObjectId} = require('mongodb')

let
    mongooseLocal = require('mongoose'),
    {Schema} = mongooseLocal


module.exports = function(conn) {

    const Post = new Schema({
        userId: {
            type: ObjectId,
            ref: 'User'
        },
        postText: String,
        postImage: String,
        upVoteCount: {
            type: Number,
            default: 0
        },
        postCommentsCount: {
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
    Post.index({
        'userId': 1
    }, {
        unique: false
    })
    conn.model('Post', Post)
}
