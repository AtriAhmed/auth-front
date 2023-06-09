import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../utils/AuthProvider'
import axios from 'axios'

export default function PrivateRoute({ component: Component, aId = 1 }) {
  const { user, setUser } = useAuthContext()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function getStatus() {
      try {
        const res = await axios.get('/api/login/status')
        if (res.data.user.type == "visitor") {
          navigate("/login")
        }
        if (res.data.user.accessId < aId) {
          navigate("/")
        }
        setUser(res.data.user)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    getStatus()

  }, [])

  if (loading) {
    return (<div>loading</div>)
  }

  return (
    <Component />
  )

}