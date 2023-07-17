import { createSlice } from '@reduxjs/toolkit'

import { signIn, signUp, getUsers } from '../actions/user.js'

const initialState = {
  user: null,
  isLoggedIn: false
}

 const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.pending]: state => {
      state.isLoggedIn = false
    },
    [signIn.fulfilled]: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    [signIn.rejected]: state => {
      state.isLoggedIn = false
    }
  }
})

export default authSlice.reducer