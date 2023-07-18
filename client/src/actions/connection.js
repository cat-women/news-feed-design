import config from './config'
import { createAsyncThunk } from '@reduxjs/toolkit'

const axios = config()

export const sendConnection = async id => {
  try {
    const resp = await axios.post(`connection/${id}`)
    getConnections()
    return resp.msg
  } catch (error) {
    console.log('vote error', error)
    return error
  }
}

export const cancel = async id => {
  try {
    const resp = await axios.post(`connection/${id}`)
    return resp.msg
  } catch (error) {
    console.log('vote error', error)
    return error
  }
}

export const getConnections = createAsyncThunk(
  'connections',
  async thunkAPI => {
    try {
      const resp = await axios.get('connection')
      return resp.data
    } catch (error) {
      console.log('Get conection error', error)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
