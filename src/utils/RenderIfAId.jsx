import React from 'react'
import { useAuthContext } from './AuthProvider'
// A function to wrap a component with that will render its children only if the user is logged in and
// has an accessId that matches the aId passed as a prop to the function.
export default function RenderIfAId({ aId, children }) {

  const { user, setUser } = useAuthContext()

  if (user.accessId >= aId) return <div>{children}</div>
}
