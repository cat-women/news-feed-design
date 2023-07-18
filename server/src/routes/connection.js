const express = require('express')
const ConnectionController = require('../controllers/connectionController')
const { authUser } = require('../middleware/auth')

const connection = new ConnectionController()
const router = express.Router()

router.post('/:id', authUser, connection.sendConnection)
router.put('/:id', authUser, connection.acceptConnection)
router.delete('/',authUser, connection.deleteConnection)
router.get('/', authUser, connection.getConnections)


module.exports = router
