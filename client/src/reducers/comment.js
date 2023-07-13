import { createSlice } from '@reduxjs/toolkit'

import { getComments } from '../actions/comment.js'

const initialState = {
  posts: [],
  isLoading: true
}

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.pending]: state => {
      state.isLoading = true
    },
    [getComments.fulfilled]: (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    },
    [getComments.rejected]: state => {
      state.isLoading = false
    }
  }
})
export default commentSlice.reducer
