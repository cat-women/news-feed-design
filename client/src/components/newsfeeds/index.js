import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'

import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { Typography } from '@mui/material'

import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import PersonIcon from '@mui/icons-material/Person'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

import { getPosts } from '../../actions/post'
import { addComments } from '../../actions/comment'

import { vote } from '../../actions/upvote'

import CarouselComponent from './postImage'

import useStyles from './styles'

export default function Newsfeeds(props) {
  const dipatch = useDispatch()
  const classes = useStyles()
  const [isLike, setIsLike] = useState(false)
  const [commentText, setCommentText] = useState('')

  const posts = props.posts

  const handleKeyPress = (e, id) => {
    if (e.key === 'Enter') {
      const result = addComments(commentText, id)
      setCommentText('')
      dipatch(getPosts())
    }
  }

  const handleChange = e => {
    setCommentText(e.target.value)
  }
  const handleUpVote = (e, id) => {
    e.preventDefault()
    setIsLike(!isLike)
    let result = vote(isLike, id)
  }
  console.log('posts', posts)
  return (
    <Grid>
      {posts.map((post, index) =>
        <Paper className={classes.container} key={index}>
          <div className={classes.poster}>
            <PersonIcon />
            <Typography className={classes.userName}>
              {post.userId.firstName} {post.userId.lastName}
            </Typography>
          </div>
          <CarouselComponent
            images={post.postImage}
            className={classes.userImage}
          />

          <Typography className={classes.content}>
            {post.postText}
          </Typography>
          <div className={classes.iconsContainer}>
            <Typography>
              {post.upVoteCount}
            </Typography>

            {post.likedByUser
              ? <ThumbUpIcon
                  className={classes.likeIcon}
                  onClick={e => handleUpVote(e, post._id)}
                />
              : <ThumbDownIcon
                  className={classes.dislikeIcon}
                  onClick={e => handleUpVote(e, post._id)}
                />}
            <Typography>
              {post.postCommentsCount}
            </Typography>

            <ChatBubbleIcon className={classes.chatIcon} />
            <Button className={classes.viewMoreBtn}> View more </Button>
          </div>
          <Typography> Comments</Typography>
          {/* Comment section */}
          {post.comments.map((comment, subindex) =>
            <div className={classes.comment}>
              <Paper className={classes.commentPaper}>
                <div className={classes.commenter}>
                  <PersonIcon />
                  <Typography>
                    {comment.commenter}
                  </Typography>
                </div>
                <Typography
                  key={subindex}
                  sx={{
                    marginLeft: '20px',
                    marginTop: '10px',
                    marginBottom: '10px'
                  }}
                >
                  {comment.commentText}
                </Typography>
              </Paper>

              <div className={classes.commentIconsContainer}>
                <ThumbUpIcon className={classes.likeIcon} fontSize="small" />
                <ChatBubbleIcon className={classes.chatIcon} fontSize="small" />
              </div>
            </div>
          )}
          <TextField
            label="Write comment "
            className={classes.commentField}
            value={commentText}
            onChange={handleChange}
            onKeyPress={e => handleKeyPress(e, post._id)}
          />
        </Paper>
      )}
    </Grid>
  )
}
