import React, { useState } from 'react'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

export default function SideNavbar(props: Props) {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ position: 'fixed' }}>
        {['Home', 'Profile', 'Connection'].map((text, index) =>
          <ListItem
            key={text}
            disablePadding
            // onClick={() => handleVariable(index)}
          >
            <ListItemButton>
              <ListItemIcon>
                <Button color="primary" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </div>
  )
}
