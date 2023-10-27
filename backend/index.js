require("dotenv").config()
const port = process.env.PORT || 3000;
const express = require("express")
const { connection } = require("./config/db")
const { userRoute } = require("./routes/user.route")
const { noteRoute } = require("./routes/note.route")

const app = express()

app.use(express.json())

app.use("/users", userRoute)
app.use("/notes", noteRoute)

app.listen(port, async () => {
    try {
        await connection
        console.log("Connected to the database")
    } catch (e) {
        console.log(e.message)
    }
    console.log(`Server is running on port ${port}`)
})

