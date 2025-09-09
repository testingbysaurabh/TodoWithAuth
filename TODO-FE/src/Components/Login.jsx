import React, { useState } from "react";
import axios from "axios"
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux"
import { addUserData } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const nav = useNavigate()


  const LoginBtnHandler = () => {
    async function loginUser() {
      try {

        const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/user/login`, {
          username, password
        }, { withCredentials: true }
        )

        dispatch(addUserData(res.data.data))
        nav("/")

        // console.log(res)
      } catch (error) {
        // console.log(error)
        toast.error("Invalid Credentials")
      }
    }
    loginUser()
  }




  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-700 via-sky-300 to-sky-600 p-6">
      <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl backdrop-blur-md">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-sky-700 mb-8">
          Login
        </h2>



        {/* Username field */}
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-sky-700 mb-2"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter user name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-sky-300 px-4 py-2 text-sky-900 placeholder-gray-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-400 outline-none transition"
          />
        </div>



        {/* Password field */}
        <div className="mb-8">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-sky-700 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-sky-300 px-4 py-2 text-sky-900 placeholder-gray-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-400 outline-none transition"
          />
        </div>



        {/* Login button */}
        <button
          onClick={LoginBtnHandler}
          className="w-full bg-sky-700 hover:bg-sky-900 text-white font-bold py-3 cursor-pointer rounded-xl shadow-lg transition transform hover:scale-[1.03] active:scale-[0.97]"
        >
          Login
        </button>



        {/* Signup link */}
        <div className="mt-6 text-center text-sky-700 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => nav("/auth")}
            className="font-semibold text-blue-600 underline hover:text-blue-900 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );

};

export default Login;
