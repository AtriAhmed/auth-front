import classNames from 'classnames'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import RenderIfAId from '../utils/RenderIfAId'
import { useAuthContext } from '../utils/AuthProvider'
import axios from 'axios'


export default function AdminNavbar() {
  const navigate = useNavigate()
  const { user, setUser } = useAuthContext()


  function handleLogout() {
    axios.get('/api/logout').then(res => {
      setUser(res.data.user)
      console.log("successfully logged out")
      navigate("/")
    }).catch(err => {
      console.log(err.response)
    })
  }


  return (
    <nav className='shadow-xl'>
      <div className='font-semibold max-w-7xl flex p-4 justify-between mx-auto'>
        <div className='text-xl font-bold'>Admin Navbar</div>
        <NavLink to='/admin' className={({ isActive }) => { classNames(isActive ? 'active' : '') }}>
          Dashboard
        </NavLink>
        <RenderIfAId aId={2}>
          <NavLink
            to='/manager'
            className={({ isActive }) => { classNames(isActive ? 'active' : '') }}
          >
            Manager
          </NavLink>
        </RenderIfAId>
        <RenderIfAId >
          <NavLink
            to='/admin'
            className={({ isActive }) => { classNames(isActive ? 'active' : '') }}
          >
            Admin
          </NavLink>
        </RenderIfAId>
        <NavLink
          to='/about'
          className={({ isActive }) => { classNames(isActive ? 'active' : '') }}
        >
          About
        </NavLink>

        <div
          size='sm'
          aria-label='Navbar action buttons'
          className='p-0'
        >

          <button
            type='submit'
            onClick={() => { handleLogout(); }}
            variant='danger'
          >
            Log-out
          </button>
        </div>
      </div>
    </nav>
  )
}
