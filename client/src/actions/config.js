import axios from 'axios'

const config = () => {
  const user =  JSON.parse(sessionStorage.getItem('user'))
  axios.defaults.baseURL = 'http://localhost:8000/'
  if (user)
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${user.access_token}`
  return axios
}

export default config
