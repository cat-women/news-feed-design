import { createSlice } from '@reduxjs/toolkit'

import { getUsers } from '../actions/user.js'

const initialState = {
  users: [],
  isLoading: false
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: state => {
      state.isLoading = true
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false
      state.users = action.payload
    },
    [getUsers.rejected]: state => {
      state.isLoading = true
    }
  }
})

export default userSlice.reducer
