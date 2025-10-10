import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTask } from '../Utils/UserSlice'

const New = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const nav = useNavigate()
  const dispatch = useDispatch()

  function handleAdd() {
    async function at() {
      try {
        if (!title.length || !desc.length) {
          return
        }
        if (title.length < 2 || desc.length < 2) {
          alert("title and description min length 2")
          return
        }


        const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/todos`, { title, desc, isCompleted: false }, { withCredentials: true })
        // console.log(res)
        dispatch(addTask(res.data.data))
        if (res.status == 200) {
          nav("/")
        }
        
      } catch (error) {
        console.log(error.message)
      }
    }
    at()
  }


  return (
    <div className='bg-gradient-to-br from-sky-700 via-sky-300 to-sky-600  min-h-[100vh]'>
      <Navbar />
      <div className="p-4 max-w-md mx-auto bg-sky-300 rounded-2xl mt-30 shadow-2xl">
        <h2 className="text-xl font-semibold mb-3">Add New Todo</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3 bg-white"
        />

        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3 bg-white"
          rows="3"
        />

        <button
          onClick={handleAdd}
          className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-900 cursor-pointer"
        >
          Add Todo
        </button>
      </div>
    </div>

  )
}

export default New
