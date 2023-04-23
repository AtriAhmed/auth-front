import React, { useEffect } from 'react'
import { useAuthContext } from '../utils/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const navigate = useNavigate()
  const { user, setUser } = useAuthContext()


  function handleLogout() {
    axios.get('/api/logout').then(res => {
      setUser(res.data.user)
      Swal.fire("Success", "Successfully Logged out", "success")
      navigate("/")
    }).catch(err => {
      console.log(err.response)
    })
  }


  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div>
      {user.username ? user.username : "not connected"}<br />
      {user.type == "visitor" ? <div>
        <Link to="/login">Login</Link><br />
        <Link to="/register">Register</Link><br />
      </div> :
        <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}
