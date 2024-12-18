import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../utils/AuthProvider'

export default function IsNotAuthenticated({ component: Component }) {
    const { user, setUser } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user?.type == "visitor") {
            navigate("/")
        }
    }, [user])

    if (!user) {
        return <div>loading</div>
    }

    return (
        <Component />
    )

}