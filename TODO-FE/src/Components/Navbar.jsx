import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { clearData } from '../Utils/UserSlice'

const Navbar = () => {
  const nav = useNavigate()
  const data = useSelector(store => store.user)
  const dispatch = useDispatch()


  function logout() {
    async function logOut() {
      const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/user/logout`, {}, { withCredentials: true })
      dispatch(clearData())
      nav("/login")
    }
    logOut()
  }


  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 shadow-lg text-white rounded-b-xl px-6 py-4">

      <div className="text-xl font-bold text-white-600">Welcome {data.firstName + " " + data.lastName}</div>


      <div className="flex gap-4">
        <button
          onClick={() => {
            nav("/")
          }}
          className="px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition cursor-pointer">
          Home
        </button>


        <button
          onClick={() => {
            nav("/new")
          }}
          className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition cursor-pointer">
          New
        </button>


        <button
          onClick={logout}
          className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
          Logout
        </button>


      </div>
    </nav>
  )
}

export default Navbar
