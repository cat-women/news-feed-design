import { createAsyncThunk } from '@reduxjs/toolkit'
import config from './config'

const axios = config()

export const signUp = createAsyncThunk('auth', async (data, thunkAPI) => {
  try {
    const resp = await axios.post('user/signup', data)
    return resp.data
  } catch (error) {
    console.log('signup api error', error)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const signIn = createAsyncThunk('auth', async (data, thunkAPI) => {
  try {
    const resp = await axios.post('user/signin', data)
    if (resp.data) {
      localStorage.setItem('user', JSON.stringify(resp.data.data))
      sessionStorage.setItem('user', JSON.stringify(resp.data.data))
    }
    return resp.data
  } catch (error) {
    console.log('signin api error', error)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const signOut = createAsyncThunk('auth', async () => {
  localStorage.removeItem('user')
})


export const getUsers = createAsyncThunk('users', async thunkAPI => {
  try {
    const resp = await axios.get('user')
    return resp.data
  } catch (error) {
    console.log('Get users error', error)
    return thunkAPI.rejectWithValue(error.message)
  }
})
