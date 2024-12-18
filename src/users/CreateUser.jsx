import React, { useState } from 'react'
import axios from 'axios'

export default function CreateUser() {
  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState([])

  const [registerInput, setRegister] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const user = {
      username: registerInput.username,
      email: registerInput.email,
      password: '',
      accessId: 1
    }
    try {
      axios.post('/api/users', user).then(res => {
        console.log("created successfully")
        setLoading(false)
      }).catch(err => {
        console.log(err)
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
    }
  }

  if (loading) {
    return loading
  }

  return (


    <div className='max-w-xl mx-auto flex justify-center items-center'>

      <form className='flex flex-col shadow-lg p-10 gap-4 w-full' onSubmit={handleSubmit}>
        <h5 className='text-center font-bold text-3xl mb-3'>Create User</h5>
        <div>
          <input placeholder="Username" type="text" name="username" onChange={handleInput} value={registerInput.username} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
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
        <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Register</button>
      </form>
    </div>

  )
}
