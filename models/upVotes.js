const {ObjectId} = require('mongodb')

let
    mongooseLocal = require('mongoose'),
    {Schema} = mongooseLocal


module.exports = function(conn) {

    const UpVotes = new Schema({
        userId: ObjectId,
        postId: ObjectId
    })
    conn.model('UpVotes', UpVotes)
}
