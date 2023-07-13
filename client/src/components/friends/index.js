import React from 'react'
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

import useStyles from './styles'

export default function Friends(props) {
  const classes = useStyles()
  const isConnected = false
  return (
    <Grid>
      <Paper className={classes.container}>
        <PersonIcon />
        <Typography className={classes.userName}>User Name</Typography>

        <div className={classes.connectionBtn}>
          {isConnected
            ? <Button className={classes.viewMoreBtn}> Cancel </Button>
            : <Button className={classes.viewMoreBtn}> Connect </Button>}
        </div>
      </Paper>
      <Divider />
    </Grid>
  )
}
