require('dotenv').config()
const express = require(express)
const { useReducer } = require('react')

const app = express()
const port = process.env.PORT
const animals = [{id:1, name:'potit_robot'}, {id:2, name:'potit_deamon'}]

app.use("/", express.static("public"))
app.use(express.json())

app.get("/message", (req, res)=>{
    console.log("[LOG] : Page des animaux")
    res.send("mes animaux")
});
