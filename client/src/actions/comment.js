import config from './config'

const axios = config()

export const addComments = async (data, postId, parentId) => {
  try {
    console.log(data, postId)
    const resp = await axios.post(`comment/${postId}`, {
      commentText: data,
      parentId: parentId ? parentId : null
    })
    return resp.data
  } catch (error) {
    console.log('Add comments error', error)
    return error
  }
}

// export const deleteComment = createAsyncThunk(
//   'comments',
//   async (id, thunkAPI) => {
//     try {
//       const resp = await axios.delete(`comment/${id}`)
//       return resp.data
//     } catch (error) {
//       console.log('Get post error', error)
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )
