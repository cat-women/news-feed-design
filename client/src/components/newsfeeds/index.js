import React, { useEffect } from 'react'
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
import CarouselComponent from './postImage'

import useStyles from './styles'

export default function Newsfeeds(props) {
  const classes = useStyles()
  const isLiked = true
  const posts = props.posts
  

  return (
    <Grid>
      {posts.map(post =>
        <Paper className={classes.container}>
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

            {isLiked
              ? <ThumbUpIcon className={classes.likeIcon} />
              : <ThumbDownIcon className={classes.dislikeIcon} />}
            <Typography>
              {post.postCommentsCount}
            </Typography>

            <ChatBubbleIcon className={classes.chatIcon} />
            <Button className={classes.viewMoreBtn}> View more </Button>
          </div>
          <TextField label="Write comment " className={classes.commentField} />
        </Paper>
      )}
    </Grid>
  )
}
