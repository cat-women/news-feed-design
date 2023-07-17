import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/post'
import authReducer from './reducers/user'
import usersReducer from './reducers/users'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    users: usersReducer
  }
})
