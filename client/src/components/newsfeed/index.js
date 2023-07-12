import React from 'react'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { Typography } from '@mui/material'

import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import Paper from '@mui/material/Paper'
import useStyles from './styles'

export default function Newsfeed(props) {
  const classes = useStyles()
  const isLiked = true

  return (
    <Grid>
      <Paper className={classes.container}>
        <Typography className={classes.userName}>User Name</Typography>
        <img
          src={process.env.PUBLIC_URL + '/images/demo.jpeg'}
          alt="User Image"
          className={classes.userImage}
        />
        <Typography className={classes.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <div className={classes.iconsContainer}>
          {isLiked
            ? <ThumbUpIcon className={classes.likeIcon} />
            : <ThumbDownIcon className={classes.dislikeIcon} />}
          <ChatBubbleIcon className={classes.chatIcon} />
        </div>
        <TextField
          label="Write comment here"
          className={classes.commentField}
        />
      </Paper>
      <Divider />
    </Grid>
  )
}
