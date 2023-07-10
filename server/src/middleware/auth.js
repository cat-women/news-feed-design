const { ObjectId } = require('mongodb')

const authUser = async (req, res, next) => {
  req.user = { username: 'test', _id: ObjectId('64aaf5bf79de80835a8a31bc') }
  next()
}

module.exports = { authUser }
