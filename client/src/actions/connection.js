import config from './config'

const axios = config()

export const sendConnection = async id => {
         try {
           const resp = await axios.post(`connection/${id}`)
           return resp.msg
         } catch (error) {
           console.log('vote error', error)
           return error
         }
       }

export const cancel = async (id) => {
  try {
    const resp = await axios.post(`connection/${id}`)
    return resp.msg
  } catch (error) {
    console.log('vote error', error)
    return error
  }
}