const express = require('express')
const VoteController = require('../controllers/upVoteController')
const vote = new VoteController()
const router = express.Router()

const { authUser } = require('../middleware/auth')

router.post('/:id/:query', authUser, vote.addVote)

module.exports = router
