const express = require('express')
const { useReducer } = require('react')
const app = express()
const port = 3000
app.use("/", express.static("public"))
app.use(express.json())

const animals = [{id:1, name:'potit_robot'}, {id:2, name:'potit_deamon'}]

app.get("/message", (req, res)=>{
    console.log("[LOG] : Page des animaux")
    res.send("mes animaux")
});
