const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const { todoRouter } = require("./Routes/todoRoutes")
const { router: userRouter } = require("./Routes/userRoutes")
const cp = require("cookie-parser")



app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173",'https://todo-with-auth-ruddy.vercel.app/api']
}))
app.use(express.json())
app.use(cp())
app.use("/api", todoRouter)
app.use("/api", userRouter)


mongoose.connect(process.env.mongo_url)
    .then(() => {
        console.log("DB Connected")

        app.listen(process.env.PORT, () => {
            console.log("Server Running")
        })
    })
    .catch(() => {
        console.log("Failed")
    })

    module.exports = app
