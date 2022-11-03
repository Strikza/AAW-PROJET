const express = require("express")
const app = express()
const port = 5173
// const pg = require('pg');
// const dotenv = require("dotenv");
//
// dotenv.config();
// console.log("connecting to", process.env.POSTGRESQL_ADDON_URI);
// const pgClient = new pg.Client(process.env.POSTGRESQL_ADDON_URI);
// pgClient.connect();  

// const animals = async () => {
//     try{
//         const res = await pgClient.query({
//             name: "read-animals",
//             text: 'select * from Animal;',
//         });
//         return res.rows;
//     } catch(err) {
//         // traitement des erreurs ici
//     }
// }

const animals = [{id:1, name:'potit_robot'}, {id:2, name:'potit_deamon'}]

app.use("/", express.static("public"))
app.use(express.json())


// app.get('/', (req, res) => {
//     animals()
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
// })

app.get("/api/animals", (req, res, next)=>{
    console.log("[LOG] : Page des animaux")
    res.send(animals)
});

app.listen(port)
