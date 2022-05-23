const express = require("express")

const app = express()
const cors = require('cors')



app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Api is running!!")
})

app.listen(5000, console.log("server started at 5000"))