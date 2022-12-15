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

app.post("/api/connexion", (req, res, next)=>{
  console.log("[LOG] : Page des utilisateurs")
  
  res.sendStatus(220)
  //pool.query(queryFetchAll, (err, result) => {
  //  res.send(result.rows)
  //})
});

app.listen(port)


// import localforage from "localforage";
// import { matchSorter } from "match-sorter";
// import sortBy from "sort-by";

// import express from 'express';
// const app = express();
// import pg from "pg";
// import dotenv from "dotenv";


// dotenv.config();
// console.log("connecting to", process.env.POSTGRESQL_ADDON_URI);
// const pgClient = new pg.Client(process.env.POSTGRESQL_ADDON_URI);
// pgClient.connect();  

// export async function getAnimals(query) {
//   await fakeNetwork("getAnimals:${query}");
//   let animals = await localforage.getItem("animals");
//   if (!animals) animals = [];
//   if (query) {
//     animals = matchSorter(animals, query, { keys: ["name"] });
//   }
//   return animals.sort(sortBy("name", "createdAt"));
// }

// export async function createAnimal() {
//   await fakeNetwork();
//   let id = Math.random().toString(36).substring(2, 9);
//   let animal = { id: Math.random().toString(36).substring(2, 9), name: "Bourletos le Vrai" };
//   let animals = await getAnimals();
//   animals.unshift(animal);
//   await set(animals);
//   return animal;
// }

// export async function getAnimal(id) {
//   await fakeNetwork(`animal:${id}`);
//   let animals = await localforage.getItem("animals");
//   let animal = animals.find(animal => animal.id === id);
//   //return animal ?? null;
//   return animal ?? { id: 1, name: "Bourletos le Fék" }
// }

// export async function updateAnimal(id, updates) {
//   await fakeNetwork();
//   let animals = await localforage.getItem("animals");
//   let animal = animals.find(animal => animal.id === id);
//   if (!animal) throw new Error("No animal found for", id);
//   Object.assign(animal, updates);
//   await set(animals);
//   return animal;
// }

// export async function deleteAnimal(id) {
//   let animals = await localforage.getItem("animals");
//   let index = animals.findIndex(animal => animal.id === id);
//   if (index > -1) {
//     animals.splice(index, 1);
//     await set(animals);
//     return true;
//   }
//   return false;
// }

// function set(animals) {
//   return localforage.setItem("animals", animals);
// }

// // fake a cache so we don't slow down stuff we've already seen
// let fakeCache = {};

// async function fakeNetwork(key) {
//   if (!key) {
//     fakeCache = {};
//   }

//   if (fakeCache[key]) {
//     return;
//   }

//   fakeCache[key] = true;
//   return new Promise(res => {
//     setTimeout(res, Math.random() * 800);
//   });
// }