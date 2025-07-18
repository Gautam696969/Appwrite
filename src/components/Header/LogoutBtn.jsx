import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = async () => {
    authService.logout().then( () => {
      dispatch( logout() )
    } )
  }
  return (
    <button
      className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn
