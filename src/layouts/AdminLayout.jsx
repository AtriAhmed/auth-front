import React from 'react'
import { Outlet } from 'react-router'
import AdminNavbar from './AdminNavbar'


export default function AdminLayout() {

  return (
        <>
        <AdminNavbar/>
        <Outlet/>
        </>
  )
}
