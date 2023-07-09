let
    mongooseLocal = require('mongoose'),
    {Schema} = mongooseLocal


module.exports = function(conn) {

    const User = new Schema({
        email: {
            type: String,
            required: true,
            index: true
        },
        firstName: String,
        lastName: String,
        username: String,
        password: String 
    })
    conn.model('User', User)
}
