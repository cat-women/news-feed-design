import { createAsyncThunk } from '@reduxjs/toolkit'
import config from './config'

const axios = config()

export const getPosts = createAsyncThunk('posts', async thunkAPI => {
  try {
    const resp = await axios.get('post')
    return resp.data
  } catch (error) {
    console.log('Get post error', error)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addPost = createAsyncThunk('posts', async (data, thunkAPI) => {
  try {
    const resp = await axios.post('post', data)
    return resp.data
  } catch (error) {
    console.log('Get post error', error)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deletePost = createAsyncThunk('posts', async (id, thunkAPI) => {
  try {
    const resp = await axios.delete(`post/${id}`)
    return resp.data
  } catch (error) {
    console.log('Get post error', error)
    return thunkAPI.rejectWithValue(error.message)
  }
})
