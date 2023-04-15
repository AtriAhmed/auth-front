import axios from 'axios'

export default {
  getLoginStatus: async () => {
    return await axios.get('/api/login/status')
  },
  postUserLogin: async (user) => {
    return await axios.post('/api/login', user)
  },
  getLoggedOut: async () => { 
      return await axios.get('/api/logout')
  },
  postNewUser: async (user) => {
      return await axios.post('/api/user', user)
  },
  getAllUsers: async () => {

    return await axios.get('/api/user')

  },
  deleteUserById: async id => {
    return await axios.delete(`api/user/${id}`)
  }
}
