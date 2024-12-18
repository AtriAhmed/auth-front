import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router'

import './App.css'
import AuthProvider from './utils/AuthProvider';

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null)


  async function getUserStatus() {
    try {
      const res = await axios.get('/api/login/status')
      setUser(res.data.user)
      return res
    } catch (err) {
      console.log(err)
      return err
    }
  }

  useEffect(() => {
    getUserStatus()
  }, [])

  return (
    <AuthProvider state={{ user, setUser }}>
      <div>
        <Outlet />
      </div>
    </AuthProvider>
  )
}

export default App
