require('dotenv').config()
const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use("/", express.static("public"))
app.use(express.json())
app.use(cookieParser());

const {Pool, Client} = require('pg')

// Temporaire, à remplacer par un ajout en BD
const tokens = []

console.log()

// Données de connexion pour la BD
const pool = new Pool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
})


// Vérification de connection déjà établie
app.use((req, res, next)=>{
  let cookie = req.cookies["TOLKIEN_CONNECTED"]
  
  if(cookie){
    console.log("[LOG] : Cookie value = ", cookie)
    
    // à remplacer par une recherche en BD
    let token_f = tokens[0]

    if(token_f){
      console.log("[LOG] : Token trouvé")

      // Création de la requête
      const queryFetchOne = {
        name: 'fetch-user-connected',
        text: 'SELECT * FROM public."USERS" where "ID" = $1',
        values: [token_f.idUser]
      }

      pool.query(queryFetchOne, (err, result) => {
        //let user_bd = JSON.parse(JSON.stringify(result.rows[0]))
        req.user = JSON.parse(JSON.stringify(result.rows[0]))
      })

    }
    else{
      // Supprime le cookie si le token n'existe pas
      res.clearCookie("TOLKIEN_CONNECTED")
    }

  }
  else{
    console.log("[LOG] : Aucun token trouvé")
    // à remplacer par une supression en BD (ssi elle existe)
    tokens.pop()
  }

  // Sert à attendre que la requête sur la base de données se termine
  setTimeout(function(){
    next()
  }, 10)
})


app.get('/', (req, res) => {
    animals()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})


// Appel de tous les animaux
app.get("/api/animals", (req, res, next)=>{
    console.log("[LOG] : Page des animaux")

    let user = req.user

    if(user){
      console.log("[LOG] : User conneced : ", user)
    }

    // Création de la requête
    const queryFetchAll = {
      name: 'fetch-animals',
      text: 'SELECT * FROM public."ANIMALS"',
    }
    
    pool.query(queryFetchAll, (err, result) => {
      res.send(result.rows)
    })
});


// Appel d'un animal
app.get("/api/animals/:id", (req, res, next)=>{
  console.log("[LOG] : Page de l'animal " + req.params.id)

  // Création de la requête
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

  // Création de la requête
  const queryFetchOne = {
    name: 'fetch-user',
    text: 'SELECT * FROM public."USERS" where "NAME" = $1 and "PASSWORD" = $2',
    values: [user.name, user.hash]
  }

  pool.query(queryFetchOne, (err, result) => {
     if(result.rows.length !== 0){

      // à remplacer par un ajout en BD
      tokens.push({
        idSession: 422022,
        idUser: result.rows[0]["ID"]
      })

      res.cookie("TOLKIEN_CONNECTED", 422022, {maxAge: 20000})
      res.sendStatus(200)
    }
    else{
      res.sendStatus(404)
    }
  })

});


app.listen(port)
