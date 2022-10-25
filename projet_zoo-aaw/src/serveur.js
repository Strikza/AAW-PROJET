require('dotenv').config()
const express = require(express)
const { useReducer } = require('react')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT
const animals = [{id:1, name:'potit_robot'}, {id:2, name:'potit_deamon'}]
const zoo_db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

app.use("/", express.static("public"))
app.use(express.json())

app.get("/message", (req, res)=>{
    console.log("[LOG] : Page des animaux")
    res.send("mes animaux")
});

app.get("/", (req, res)=>{
    console.log("[LOG] : Page des animaux")
    const insert = "INSERT INTO Test (name) VALUES ('Second Name');"
    zoo_db.query(insert)
});

app.listen(5173, () => {
    const insert = "SELECT * FROM Test;"
    zoo_db.query(insert, (err, result) => {
        console.log(result)
    })
    console.log("tag")
})