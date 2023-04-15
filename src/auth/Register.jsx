import React, { useEffect, useState } from 'react'
import API from "../utils/API"
import { useAuthContext } from '../utils/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const { user, setUser } = useAuthContext()
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function resetInputs() {
    setRegister({
      username: '',
      email: '',
      password: '',
      accessId: 1,
      verify_password: ''
    })
  }

  useEffect(() => {
    API.getLoginStatus().then(res => {
      setUser(res.data.user)
      if (res.data.user?.type == "visitor") {
        setLoading(false)
      } else
        if (res.data.user?.accessId > 1) {
          navigate("/admin")
        }
        else {
          navigate("/")
        }
    }).catch(err => {
      console.log(err)
    })

  }, [])

  const [registerInput, setRegister] = useState({
    username: '',
    email: '',
    password: '',
    accessId: 1,
    verify_password: ''
  })

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors({})
    const user = {
      username: registerInput.username,
      email: registerInput.email,
      password: registerInput.password,
      accessId: registerInput.accessId
    }
    if (user.password != registerInput.verify_password) {
      setErrors({ verify_password: "Password does not match" })
    } else {
      setLoading(true)
      API.postNewUser(user).then(res => {
        resetInputs()
        console.log("successfully registered")
        navigate("/login")
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  if (loading) {
    return <div>loading</div>
  }

  return (


    <div className='flex max-w-xl mx-auto items-center h-[100vh]'>
      <form className='flex flex-col gap-4 w-full bg-white p-8 shadow-lg' onSubmit={handleSubmit}>
        <div>
          <h5 className='text-center font-bold text-2xl'>Register</h5>
        </div>
        <div>
          <input placeholder="Nom d'utilisateur" type="text" name="username" onChange={handleInput} value={registerInput.username} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
          <span className='text-red-500'>{errors.username}</span>
        </div>
        <div>
          <input placeholder="Email" type="email" name="email" onChange={handleInput} value={registerInput.email} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
          <span className='text-red-500'>{errors.email}</span>
        </div>
        <div>
          <input placeholder="Mot de passe" type="text" name="password" onChange={handleInput} value={registerInput.password} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
          <span className='text-red-500'>{errors.password}</span>
        </div>
        <div>
          <input placeholder="Confirmer le Mot de passe" type="text" name="verify_password" onChange={handleInput} value={registerInput.verify_password} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
          <span className='text-red-500'>{errors.verify_password}</span>
        </div>
        <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Confirmer</button>
        <hr />
        <div className='text-center'>
          or <Link to="/login" className='text-blue-400 font-bold'>login</Link>
        </div>
      </form>
    </div>

  )
}
