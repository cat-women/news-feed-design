const User = require('../models/user.js')
const Connection = require('../models/connection.js')

const bcrypt = require('bcryptjs')
const { generateToken } = require('../services/token')
const { ObjectId } = require('mongodb')

class UserController {
  signup = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body

    try {
      const oldUser = await User.findOne({
        email
      })

      if (oldUser) return res.status(400).json({ msg: 'User already exits' })

      const hashedPassword = await bcrypt.hash(password, 12)

      await User.create({
        firstName,
        lastName,
        username: firstName,
        email,
        password: hashedPassword
      })

      return res.status(200).json({ msg: 'User created' })
    } catch (error) {
      console.log(error)
      next()
    }
  }

  signin = async (req, res, next) => {
    const { email, password } = req.body
    try {
      const oldUser = await User.findOne({
        email
      })
      if (!oldUser) return res.status(404).json({ msg: 'User does not exit ' })

      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)
      if (!isPasswordCorrect)
        return res.status(400).json({ msg: 'Invalid crendential' })

      const { access_token, refresh_token } = generateToken({
        username: oldUser.username,
        email: oldUser.email,
        id: oldUser._id
      })

      return res.status(200).json({
        msg: 'Login success',
        data: {
          access_token,
          refresh_token,
          id: oldUser._id,
          username: oldUser.username
        }
      })
    } catch (error) {
      console.log(error)
      next()
    }
  }

  getUsers = async (req, res, next) => {
    const userId = new ObjectId('64afd500fcb014b79efd3751')
    const cons = await Connection.find().exec()

    let conIds = []
    cons.map(con => {
      if (!conIds.includes(con.requestorId)) conIds.push(con.requestorId)
      if (!conIds.includes(con.receiverId)) conIds.push(con.receiverId)
    })

    try {
      const users = await User.find(
        {
          _id: { $ne: userId, $nin: conIds }
        },
        {
          username: 1
        }
      )

      res.status(200).json(users)
    } catch (error) {
      console.log(error)
      next()
    }
  }
}

module.exports = UserController
