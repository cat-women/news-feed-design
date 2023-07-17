const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')

require('dotenv').config()

const ErrorHandler = require('./src/middleware/errorHandler.js')
const User = require('./src/routes/user.js')
const Post = require('./src/routes/post.js')
const Comment = require('./src/routes/comment.js')
const Connection = require('./src/routes/connection.js')
const Vote = require('./src/routes/upVote.js')

const app = express()
const router = express.Router()

const PORT = process.env.PORT || 8000

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.header('Access-Control-Allow-Headers', 'Authorization')
})

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(__dirname + '/public'))

// database connection

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch(err => console.log(err.message))

// error handler
app.use(ErrorHandler)

// routes
app.use('/user', User)
app.use('/post', Post)
app.use('/comment', Comment)
app.use('/connection', Connection)
app.use('/vote', Vote)
