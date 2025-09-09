import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function getMaxDOBFor18YearsOld() {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 18);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const Auth = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const nav = useNavigate()


  const signupBtnHandler = () => {
    async function registerUser() {
      try {
        const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/user/signup`, {
          firstName, lastName, username, password, email, gender, number, dateOfBirth
        })
        if (res.status = 201) { toast.success(res.data.msg) && nav("/login") }
      //  console.log(res)
      } catch (error) {
        toast.error(error.response.data.error)
      }

    }
    registerUser()
  }
  // console.log(firstName, lastName, username, password, email, gender, number, dateOfBirth)



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sign Up
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First Name */}
          <div className="bg-white rounded-xl shadow p-4">
            <label htmlFor="fn" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="fn"
              type="text"
              placeholder="Enter first Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>



          {/* Last Name */}
          <div className="bg-white rounded-xl shadow p-4">
            <label htmlFor="sn" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="sn"
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>



          {/* Username */}
          <div className="bg-white rounded-xl shadow p-4">
            <label htmlFor="un" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="un"
              type="text"
              placeholder="Enter UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>


          {/* Password */}
          <div className="bg-white rounded-xl shadow p-4">
            <label htmlFor="pw" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="pw"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>


          {/* Email */}
          <div className="bg-white rounded-xl shadow p-4 md:col-span-2">
            <label htmlFor="em" className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              id="em"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Gender */}
          <div className="bg-white rounded-xl shadow p-4">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>


          {/* Number */}
          <div className="bg-white rounded-xl shadow p-4">
            <label htmlFor="num" className="block text-sm font-medium text-gray-700">
              Number
            </label>
            <input
              id="num"
              type="number"
              placeholder="Enter Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          {/* DOB */}
          <div className="bg-white rounded-xl shadow p-4 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              max={getMaxDOBFor18YearsOld()}
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>



          {/* Signup Button */}
          <div className="md:col-span-2">
            <button
              onClick={signupBtnHandler}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Auth
