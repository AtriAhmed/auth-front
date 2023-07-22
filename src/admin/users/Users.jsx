import React from 'react'
import AllUsers from '../../users/AllUsers'
import CreateUser from '../../users/CreateUser'

export default function Users() {
  return (
    <div>
         <AllUsers />
      <CreateUser />
      <UpdateUser />
      <DeleteUser />
    </div>
  )
}
