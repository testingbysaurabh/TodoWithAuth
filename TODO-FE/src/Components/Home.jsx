import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { delTask } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const userData = useSelector((store) => store.user);

  function handleDelete(id) {
    async function del() {
      const res = await axios.delete(
        `${import.meta.env.VITE_DOMAIN}/todos/${id}`,
        { withCredentials: true }
      );
      if (res.status == 200) {
        dispatch(delTask(id));
      }
    }
    del();
  }

  return (
    <div className="bg-gradient-to-r from-sky-800 via-sky-500 to-sky-600 shadow-lg min-h-[100vh] pb-8">
      <Navbar />
      {userData.todos.map((item) => (
        <div
          key={item._id}
          className={`bg-white shadow rounded p-4 my-4 mx-auto max-w-4xl w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2
           ${item.isCompleted ? "line-through text-gray-500" : ""}`}
        >
          <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
            {item.title}
          </h2>
          <p className="text-gray-700 mb-2">{item.desc}</p>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500 mb-2">
            <span>
              <strong>Date:</strong> {item.date}
            </span>
            <span>
              <strong>Updated:</strong> {item.updatedOn}
            </span>
            <span>
              <strong>Task ID:</strong> {item._id}
            </span>
            <span>
              <strong>Status:</strong>{" "}
              <span style={{ color: item.isCompleted ? "green" : "red" }}>
                {item.isCompleted ? "Completed" : "Incomplete"}
              </span>
            </span>
          </div>

          <div className="text-xs sm:text-sm text-gray-400 mb-2">
            Author ID: {item.author}
          </div>

          {/* Buttons container responsive */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                nav("/edit/" + item._id);
              }}
              className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition w-full sm:w-auto"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition w-full sm:w-auto"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};




export default Home;
