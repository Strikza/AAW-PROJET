require('dotenv').config()
const crypto = require("crypto")
const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use("/", express.static("public"))
app.use(express.json())
app.use(cookieParser());

const {Pool} = require('pg')

// Generic method to generate a UUID v4 https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// Données de connexion pour la BD
const pool = new Pool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
})


// Vérification de connection déjà établie
app.use((req, res, next) => {
    const cookie = req.cookies["token"]

    if (cookie) {
        console.log("[LOG] : Cookie value = ", cookie)

        // à remplacer par une recherche en BD
        let token_f = null // token[0]

        if (token_f) {
            console.log("[LOG] : Token trouvé")

            pool.query({
                name: 'fetch-user-connected',
                text: 'SELECT * FROM public."USERS" where "ID" = $1',
                values: [token_f.idUser]
            }, (err, result) => {
                //let user_bd = JSON.parse(JSON.stringify(result.rows[0]))
                req.user = JSON.parse(JSON.stringify(result.rows[0]))
            })

        } else {
            // Supprime le cookie si le token n'existe pas
            res.clearCookie("token")
        }

    } else {
        console.log("[LOG] : Aucun token trouvé")
        // à remplacer par une supression en BD (ssi elle existe)
        //tokens.pop()
    }

    // Sert à attendre que la requête sur la base de données se termine
    setTimeout(function () {
        next()
    }, 10)
})


// Appel de tous les animaux
app.get("/api/animals", (req, res, next) => {
    console.log("[LOG] : Page des animaux")

    let user = req.user

    if (user) {
        console.log("[LOG] : User conneced : ", user)
    }

    pool.query({
        name: 'fetch-animals',
        text: 'SELECT * FROM public."ANIMALS"',
    }, (err, result) => {
        res.send(result.rows)
    })
});


// Appel d'un animal
app.get("/api/animals/:id", (req, res, next) => {
    console.log("[LOG] : Page de l'animal " + req.params.id)

    pool.query({
        name: 'fetch-animal',
        text: 'SELECT * FROM public."ANIMALS" where "ID" = $1',
        values: [req.params.id],
    }, (err, result) => {
        res.send(result.rows)
    })
});


app.post("/api/connect", (req, res, next) => {
    console.log("[LOG] : Page des utilisateurs")

    const user = req.body

    pool.query({
        name: 'fetch-user',
        text: 'SELECT "ID" FROM public."USERS" where "NAME" = $1 and "PASSWORD" = $2',
        values: [user.name, user.hash]
    }, (err, result) => {
        if (result.rows.length !== 0) {

            const value = uuidv4();

            pool.query({
                name: 'add-token',
                text: 'INSERT INTO public."TOKENS" ("ID", "USER_ID", "TIMESTAMP") VALUES  ($1, $2, NOW())',
                values: [value, result.rows[0]["ID"]]
            });

            res.cookie("token", value) // option {maxAge: 20000}
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
    })
});


app.post("/api/register", (req, res, next) => {
    console.log("[LOG] : Register")

    const user = req.body;

    pool.query({
        name: 'fetch-user',
        text: 'SELECT count(*) FROM public."USERS" where "NAME" = $1',
        values: [user.name]
    }, (err, result) => {
        if (result.rows.length !== 0) {
            if (parseInt(result.rows[0]["count"]) === 0) {
                pool.query({
                    name: 'add-user',
                    text: 'INSERT INTO public."USERS" ("ID", "NAME", "PASSWORD", "EMAIL") VALUES  ($1, $2, $3, $4)',
                    values: [uuidv4(), user.name, user.hash, user.email_f]
                });
                res.sendStatus(201);
            } else {
                res.sendStatus(403);
            }
        } else {
            res.sendStatus(404);
        }
    });
});


app.listen(port);
