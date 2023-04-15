import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router'

import './App.css'
import API from './utils/API';
import AuthProvider from './utils/AuthProvider';

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null)


  async function getUserStatus() {
    console.log("i checked")
    try {
      const res = await API.getLoginStatus()
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
