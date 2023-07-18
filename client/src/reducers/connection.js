import { createSlice } from '@reduxjs/toolkit'
import { getConnections } from '../actions/connection'

const initialState = {
  connections: [],
  isLoading: true
}

const connectionSlice = createSlice({
  name: 'connections',
  initialState,
  reducers: {},
  extraReducers: {
    [getConnections.pending]: state => {
      state.isLoading = true
    },
    [getConnections.fulfilled]: (state, action) => {
      state.isLoading = false
      state.connections = action.payload
    },
    [getConnections.rejected]: state => {
      state.isLoading = false
    }
  }
})
export default connectionSlice.reducer
