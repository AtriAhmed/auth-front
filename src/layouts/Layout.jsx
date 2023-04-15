import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useAuthContext } from '../utils/AuthProvider'
import Navbar from './Navbar'

export default function Layout() {
    const { user, setUser } = useAuthContext()

    useEffect(() => {
        console.log(user)

    }, [user])

    const locations = ["/login", "/register"]

    const haveLayout = () => {
        for (let loc of locations) {
            if (location?.pathname.indexOf(loc) == 0)
                return false
        }
        return true
    }

    return (
        <>
            {haveLayout() ? <Navbar /> : ""}
            <Outlet />
        </>
    )
}
