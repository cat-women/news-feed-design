const jwt = require('jsonwebtoken')

require('dotenv').config()

function generateToken(data) {
  const access_token = jwt.sign(data, process.env.JWT_ACCESS_TOEKN_KEY, {
    expiresIn: process.env.ACCESS_TOKEN_LIFE
  })

  const refresh_token = jwt.sign(data, process.env.JWT_REFRESH_TOKEN_KEY, {
    expiresIn: process.env.REFRESH_TOKEN_LIFE
  })

  return { access_token, refresh_token }
}

module.exports = generateToken
