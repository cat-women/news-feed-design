const Connection = require('../models/connection.js')

class ConnectionController {
  sendConnection = async (req, res, next) => {
    try {
      await Connection.create({
        requestorId: req.user.id,
        receiverId: req.params.id
      })
      res.status(200).json({ msg: 'Connection request send' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
  acceptConnection = async (req, res, next) => {
    try {
      await Connection.findOneAndUpdate(
        {
          requestorId: req.params.id,
          receiverId: req.user._id
        },
        { status: 'accepted' }
      )
      res.status(200).json({ msg: 'Connection request accepted' })
    } catch (error) {
      console.log(error)
      next()
    }
  }

  deleteConnection = async (req, res, next) => {
    try {
      const connection = await Connection.findById(req.user._id)
      if (!connection) res.status(404).json({ msg: 'Connection not found' })

      res.status(200).json({ msg: 'Connection request accepted' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
}

module.exports = ConnectionController
