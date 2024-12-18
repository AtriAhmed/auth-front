import React, { useContext } from "react"

const defaultState = {
  user: null,
  setUser: () => { }
}

const AuthContext = React.createContext(defaultState)

function AuthProvider({ state, children }) {


  return (
    <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

export function useAuthContext() {
  return useContext(AuthContext)
}
