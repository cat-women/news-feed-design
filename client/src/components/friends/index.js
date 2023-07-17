import React from 'react'
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

import useStyles from './styles'
import { sendConnection } from '../../actions/connection'

export default function Friends(props) {
  const classes = useStyles()
  const { users, isLoading } = useSelector(state => state.users)

  const handleConnection = (e, id) => {
    e.preventDefault()
    sendConnection(id)
  }
  let isConnected = false
  return (
    <Grid>
      <Typography sx={{ marginTop: '40px' }}> Suggested Friends </Typography>
      {users.map(user =>
        <Paper className={classes.container}>
          <PersonIcon />
          <Typography className={classes.userName}>
            {user.username}
          </Typography>

          <div className={classes.connectionBtn}>
            {isConnected
              ? <Button className={classes.viewMoreBtn}> Cancel </Button>
              : <Button
                  className={classes.viewMoreBtn}
                  onClick={e => handleConnection(e, user._id)}
                >
                  Connect
                </Button>}
          </div>
        </Paper>
      )}
      <Divider />
    </Grid>
  )
}
