// import React from 'react'
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { useSelector, useDispatch } from "react-redux"
// import { clearData } from '../Utils/UserSlice'

// const Navbar = () => {
//   const nav = useNavigate()
//   const data = useSelector(store => store.user)
//   const dispatch = useDispatch()


//   function logout() {
//     async function logOut() {
//       const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/user/logout`, {}, { withCredentials: true })
//       dispatch(clearData())
//       nav("/login")
//     }
//     logOut()
//   }


//   return (
//     <nav className="flex items-center justify-between bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 shadow-lg text-white rounded-b-xl px-6 py-4">

//       <div className="text-xl font-bold text-white-600">Welcome {data.firstName + " " + data.lastName}</div>


//       <div className="flex gap-4">
//         <button
//           onClick={() => {
//             nav("/")
//           }}
//           className="px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition cursor-pointer">
//           Home
//         </button>


//         <button
//           onClick={() => {
//             nav("/new")
//           }}
//           className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition cursor-pointer">
//           New
//         </button>


//         <button
//           onClick={logout}
//           className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
//           Logout
//         </button>


//       </div>
//     </nav>
//   )
// }

// export default Navbar


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearData } from "../Utils/UserSlice";

const Navbar = () => {
  const nav = useNavigate();
  const data = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  async function logout() {
    await axios.post(
      `${import.meta.env.VITE_DOMAIN}/user/logout`,
      {},
      { withCredentials: true }
    );
    dispatch(clearData());
    nav("/login");
  }

  return (
    <nav className="bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 shadow-lg text-white rounded-b-xl">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Welcome */}
        <div className="text-lg md:text-xl font-bold">
          Welcome {data.firstName + " " + data.lastName}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => nav("/")}
            className="px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-800 transition"
          >
            Home
          </button>

          <button
            onClick={() => nav("/new")}
            className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 transition"
          >
            New
          </button>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 rounded-md hover:bg-sky-700"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col items-center gap-3 pb-4 md:hidden">
          <button
            onClick={() => {
              nav("/");
              setOpen(false);
            }}
            className="w-[90%] px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-800 transition"
          >
            Home
          </button>

          <button
            onClick={() => {
              nav("/new");
              setOpen(false);
            }}
            className="w-[90%] px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 transition"
          >
            New
          </button>

          <button
            onClick={() => {
              logout();
              setOpen(false);
            }}
            className="w-[90%] px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
