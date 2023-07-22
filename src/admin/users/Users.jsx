import React, { useState } from 'react'
import AllUsers from '../../users/AllUsers'
import CreateUser from '../../users/CreateUser'
import Modal from '../../Modal'

export default function Users() {
  const [addModalShow, setAddModalShow] = useState(false)

  return (
    <div>
         <AllUsers />
         <button onClick={()=>setAddModalShow()}>Add user</button>
         <Modal
        show={addModalShow}
        hide={() => {
          setAddModalShow(false);
        }}
        dialogClassName="w-full sm:max-w-2xl h-fit my-auto pb-5 rounded-xl"
      >
      <CreateUser />
      </Modal>
      <UpdateUser />
      <DeleteUser />
    </div>
  )
}
