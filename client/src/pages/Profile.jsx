import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {

const {currentUser }= useSelector((state)=>state.user)

  return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-7' >{currentUser.username}</h1>
    </div>
  )
}
