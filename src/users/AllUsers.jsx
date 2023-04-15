import React, { useEffect, useState } from 'react'
import API from "../utils/API"

export default function AllUsers() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    API.getAllUsers().then(res => {
      setUsers(res.data)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })

  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='text-xl font-bold'> All users: </div>
      {users.map((user) => {
        return <div key={user._id}>{user._id}<br />{user.username}</div>
      })}
    </div>
  )
}
