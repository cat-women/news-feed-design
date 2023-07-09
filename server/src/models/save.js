const {ObjectId} = require('mongodb')

let
    mongooseLocal = require('mongoose'),
    {Schema} = mongooseLocal


module.exports = function(conn) {

    const Save = new Schema({
        type: String,
        userId: ObjectId,
        postId: ObjectId
    })
    conn.model('Save', Save)
}
