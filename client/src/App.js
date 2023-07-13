import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

import './App.css'
// reducers
import { getPosts } from './actions/post'

import Newsfeeds from './components/newsfeeds'
import Friends from './components/friends'

function App() {
  const dispatch = useDispatch()
  const { posts, isLoading } = useSelector(store => store.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="App">
      <AppBar position="fixed" sx={{ background: 'white', width: '100%' }}>
        <Toolbar>
          <InputLabel sx={{ marginLeft: '129px' }}>Expression :</InputLabel>
        </Toolbar>
      </AppBar>
      {/** Sidenavbar */}
      <div className="container">
        <div>
          {isLoading
            ? <CircularProgress sx={{ marginTop: '30px' }} />
            : <Newsfeeds posts={posts} />}
        </div>
        <div>
          <Friends />
        </div>
      </div>
    </div>
  )
}

export default App
