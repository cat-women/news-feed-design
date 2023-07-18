const Connection = require('../models/connection.js')
const { ObjectId } = require('mongodb')

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

  getConnections = async (req, res, next) => {
    const userId = req.user
      ? new ObjectId(req.user.id)
      : new ObjectId('64afd500fcb014b79efd3751')
    try {
      const connections = await Connection.aggregate([
        {
          $match: { requestorId: userId }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'requestorId',
            foreignField: '_id',
            as: 'requestor'
          }
        },
        {
          $unwind: {
            path: '$sender',
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'receiverId',
            foreignField: '_id',
            as: 'receiver'
          }
        },
        {
          $unwind: {
            path: '$receiver',
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $project: {
            'receiver.username': 1,
            'requestor.username': 1,
            receiverId: 1,
            requestorId: 1,
            status: 1
          }
        }
      ]).exec()
      res.status(200).json(connections)
    } catch (error) {
      console.log(error)
      next()
    }
  }
}

module.exports = ConnectionController
