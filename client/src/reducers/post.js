import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../actions/post.js'

const initialState = {
  posts: [],
  isLoading: true
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getPosts.pending]: state => {
      state.isLoading = true
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    },
    [getPosts.rejected]: state => {
      state.isLoading = false
    }
  }
})
export default postSlice.reducer
