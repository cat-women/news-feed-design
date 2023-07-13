import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/'

export const getComments = createAsyncThunk(
  'comments',
  async (postId, thunkAPI) => {
    try {
      const resp = await axios(`comment/${postId}`)
      return resp.data
    } catch (error) {
      console.log('Get comment error', error)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addComments = createAsyncThunk(
  'comments',
  async (data, postId, thunkAPI) => {
    try {
      const resp = await axios.post(`comment/${postId}`, data)
      return resp.data
    } catch (error) {
      console.log('Get post error', error)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteComment = createAsyncThunk('comments', async (id, thunkAPI) => {
  try {
    const resp = await axios.delete(`comment/${id}`)
    return resp.data
  } catch (error) {
    console.log('Get post error', error)
    return thunkAPI.rejectWithValue(error.message)
  }
})
