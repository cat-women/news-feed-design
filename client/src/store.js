import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/post'
import commentReducer from './reducers/comment'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentReducer
  }
})
