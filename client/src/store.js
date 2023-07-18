import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/post'
import authReducer from './reducers/user'
import usersReducer from './reducers/users'
import conReducer from './reducers/connection'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    users: usersReducer,
    connections: conReducer
  }
})
