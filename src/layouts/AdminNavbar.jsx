import classNames from 'classnames'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import RenderIfAId from '../utils/RenderIfAId'
import { useAuthContext } from '../utils/AuthProvider'
import API from '../utils/API'


export default function AdminNavbar() {
  const navigate = useNavigate()
  const { user, setUser } = useAuthContext()


  function handleLogout() {
    API.getLoggedOut().then(res => {
      setUser(res.data.user)
      Swal.fire("Success", "Successfully Logged out", "success")
      navigate("/")
    }).catch(err => {
      console.log(err.response)
    })
  }


  return (
    <nav expand='md' bg='dark' variant='dark'>
      <div aria-controls='responsive-top-navbar' />
      <div id='responsive-top-navbar'>
        <div>MERN Passport MySQL</div>
        <nav>
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
          <RenderIfAId aId={3}>
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
        </nav>
      </div>
      <div
        size='sm'
        aria-label='Navbar action buttons'
        className='p-0'
      >
        <button

          variant='outline-light'
          className='text-capitalize px-1'
        >
          {`${user.username} `}
          <div variant='light' className='p-1'>
            {user.type}
          </div>
        </button>
        <button
          type='submit'
          onClick={() => { handleLogout(); }}
          variant='danger'
        >
          Log-out
        </button>
      </div>
    </nav>
  )
}
