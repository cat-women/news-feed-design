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
import FriendsList from './list'
import { sendConnection } from '../../actions/connection'

export default function Friends(props) {
  const classes = useStyles()
  const { users, isLoading } = useSelector(state => state.users)
  const { connections, isConLoading } = useSelector(state => state.connections)
  const userId = props.userId ? props.userId : '64afd500fcb014b79efd3751'

  let connectionRequestReceived = connections.filter(
    con => con.receiverId === userId && con.status === 'pending'
  )

  let connectionRequestsend = connections.filter(
    con => con.requestorId === userId && con.status === 'pending'
  )

  let friends = connections.filter(con => con.status === 'accepted')

  const handleConnection = (e, id) => {
    e.preventDefault()
    sendConnection(id)
  }
  let isConnected = false
  return (
    <Grid>
      {/* Friends */}
      {friends.length > 0 && <FriendsList data={friends} type={1} />}
      <Divider />

      {/* Friends request */}
      {connectionRequestReceived.length > 0 &&
        <FriendsList data={connectionRequestReceived} type={2} />}
      <Divider />

      {/* Request send  */}
      {connectionRequestsend.length > 0 &&
        <FriendsList data={connectionRequestsend} type={3} />}

      <Divider />
    </Grid>
  )
}
