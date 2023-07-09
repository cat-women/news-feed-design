const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = generateToken = data => {
  const access_token = jwt.sign(
    data,
    process.env.JWT_ACCESS_TOEKN_PRIVATE_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_LIFE
    }
  )

  const refresh_token = jwt.sign(
    data,
    process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
    {
      expiresIn: process.env.REFRESH_TOKEN_LIFE
    }
  )

  return { access_token, refresh_token }
}
