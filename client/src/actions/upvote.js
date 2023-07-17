import config from './config'

const axios = config()

export const vote = async (vote, id) => {
  try {
    const resp = await axios.post(`vote/${id}/${vote ? 1 : 0}`)
    return resp.msg
  } catch (error) {
    console.log('vote error', error)
    return error
  }
}
