import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Grid from '@mui/material/Grid'
import './App.css'

import SideNavbar from './components/sideNavbar'
import Newsfeed from './components/newsfeed'

function App() {
  const drawerWidth = 240

  return <div className="App">
      <AppBar position="fixed" sx={{ background: 'white', width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          <InputLabel sx={{ marginLeft: '129px' }}>Expression :</InputLabel>
        </Toolbar>
      </AppBar>

      {/** Sidenavbar */}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <SideNavbar variant="temporary" ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} />
      </Box>
      <div className="newsfeed-container">
        <Newsfeed />
        <Newsfeed />
      </div>
    </div>
}

export default App
