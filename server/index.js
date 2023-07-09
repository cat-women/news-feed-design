const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const ErrorHandler = require('./src/middleware/errorHandler.js')
const User = require('./src/routes/user.js')

const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

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
