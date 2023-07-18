import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PersonIcon from '@mui/icons-material/Person'
import Button from '@mui/material/Button'
import useStyles from './styles'

const conType = {
  '1': 'Friends',
  '2': 'Connection Requested',
  '3': 'Request sent'
}

export default function FriendsList(props) {
  const classes = useStyles()

  const data = props.data
  const type = props.type

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        marginTop: '30px',
        color: 'black'
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id=""
          sx={{ color: 'black', font: 'bold' }}
        >
          {conType[type]}
        </ListSubheader>
      }
    >
      {data.map(user =>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              type === 3
                ? user.receiver.username
                : type === 2 ? user.requestor.username : user.userName
            }
          />
          {type === 2 &&
            <Button
              sx={{ marginLeft: '10px' }}
              className={classes.acceptBtn}
              color="success"
              variant="contained"
            >
              Accept
            </Button>}
          {type === 3 &&
            <Button
              sx={{ marginLeft: '10px' }}
              className={classes.cancelBtn}
              color="error"
              variant="contained"
              size="small"
            >
              Cancel
            </Button>}
        </ListItemButton>
      )}
    </List>
  )
}
