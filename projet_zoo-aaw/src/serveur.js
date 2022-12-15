const express = require("express");
const app = express();
const port = 3000;
app.use("/", express.static("public"))
app.use(express.json())

const {Pool, Client} = require('pg')

const pool = new Pool({
  user: 'superuser',
  host: 'localhost',
  database: 'zoo_db',
  password: 'root',
  port: 5432,
})


const animals = [
  {id:1, name:'potit_robot'}, 
  {id:2, name:'potit_deamon'}, 
  {id:3, name:'My Bourletos'}
]

const user = {
  pseudo : "user",
  pwd : "1234"
}

const queryFetchAll = {
  name: 'fetch-animals',
  text: 'SELECT * FROM public."ANIMALS"',
}

app.get('/', (req, res) => {
    animals()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get("/api/animals", (req, res, next)=>{
    console.log("[LOG] : Page des animaux")
    
    pool.query(queryFetchAll, (err, result) => {
      res.send(result.rows)
    })
});

app.get("/api/animals/:id", (req, res, next)=>{
  console.log("[LOG] : Page de l'animal " + req.params.id)

  const queryFetchOne = {
    name: 'fetch-animal',
    text: 'SELECT * FROM public."ANIMALS" where "ID" = $1',
    values: [req.params.id],
  }
  
  pool.query(queryFetchOne, (err, result) => {
    res.send(result.rows)
  })
});

app.post("/api/connect", (req, res, next)=>{
  console.log("[LOG] : Page des utilisateurs")

  const user = req.body

  console.log(user)
  
  res.sendStatus(200)
  //pool.query(queryFetchAll, (err,result) => {
  //  res.send(result.rows)
  //})
});

app.listen(port)
