import axios from 'axios'
import React, { useState } from 'react'

export default function DeleteUser() {
    const [id,setId] = useState("")

    function handleId(e){
        e.persist()
        setId(()=>e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.delete(`/api/user/${id}`).then(res=>{
            console.log("deleted successfully")
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
        <div className='text-xl font-bold'>Delete User</div>
        <input placeholder='id' type="text" name='id' onChange={handleId} value={id} />
        <button type='submit' onClick={handleSubmit}>Delete</button> 
    </div>
  )
}
