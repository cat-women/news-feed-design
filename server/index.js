const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')

require('dotenv').config()

const ErrorHandler = require('./src/middleware/errorHandler.js')
const User = require('./src/routes/user.js')
const Post = require('./src/routes/post.js')

const app = express()
const PORT = process.env.PORT || 8000

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use('/uploads', express.static('uploads'))

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

// erro handler
app.use(ErrorHandler)

// routes
app.use('/user', User)
app.use('/post', Post)
