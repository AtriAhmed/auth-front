import React from 'react'
import PropTypes from 'prop-types'
import { useAuthContext } from './AuthProvider'
// A function to wrap a component with that will render its children only if the user is logged in and
// has an accessId that matches the aId passed as a prop to the function.
const RenderIfAId = () => {

  const { user, setUser } = useAuthContext()

  const RenderIfAId = props => (

    user.accessId >= props.aId ? <div>{props.children}</div> : null

  )
}


RenderIfAId.propTypes = {
  aId: PropTypes.number,
  children: PropTypes.element.isRequired
}
export default RenderIfAId
