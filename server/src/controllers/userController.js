const User = require('../models/user.js')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../services/token')


class UserController {
  signup = async (req, res, next) => {
    const { firstName, lastName, username, email, password } = req.body

    try {
      const oldUser = await User.findOne({
        email
      })

      if (oldUser) return res.status(400).json({ msg: 'User already exits' })

      const hashedPassword = await bcrypt.hash(password, 12)

      const result = await User.create({
        firstName,
        lastName,
        username: firstName,
        email,
        password
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
      if (!oldUser)
        return res.status(404).json({ msg: 'User doesnt not exit ' })

      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)
      if (!isPasswordCorrect)
        return res.status(400).json({ msg: 'Invalid crendential' })

      const { access_token, refresh_token } = generateToken({
        username: oldUser.username,
        email: oldUser.email,
        id: oldUser._id
      })

      return res
        .status(200)
        .json({ msg: 'Login success', access_token, refresh_token })
    } catch (error) {
      console.log(error)
      next()
    }
  }
}

module.exports = UserController
