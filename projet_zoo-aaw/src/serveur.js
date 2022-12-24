const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;


const {upsetTokenByIdQuery, insertUserQuery, countNameQuery, selectUserByTokenQuery, selectUserByLoginQuery,
    selectAnimalById, selectAllAnimals
} = require("./js/db");
const {uuidV4} = require("./js/tools");


app.use("/", express.static("public"))
app.use(express.json())
app.use(cookieParser());



// Vérification de connection déjà établie

// app.use((req, res, next) => {
//     const cookie = req.cookies["token"]
//
//     if (cookie) {
//         console.log("[LOG] : Cookie value = ", cookie)
//
//         // à remplacer par une recherche en BD
//         let token_f = null // token[0]
//
//         if (token_f) {
//             console.log("[LOG] : Token trouvé")
//
//             pool.query({
//                 name: 'fetch-user-connected',
//                 text: 'SELECT * FROM public."USERS" where "ID" = $1',
//                 values: [token_f.idUser]
//             }, (err, result) => {
//                 //let user_bd = JSON.parse(JSON.stringify(result.rows[0]))
//                 req.user = JSON.parse(JSON.stringify(result.rows[0]))
//             })
//
//         } else {
//             // Supprime le cookie si le token n'existe pas
//             res.clearCookie("token")
//         }
//
//     } else {
//         console.log("[LOG] : Aucun token trouvé")
//         // à remplacer par une supression en BD (ssi elle existe)
//         //tokens.pop()
//     }
//
//     // Sert à attendre que la requête sur la base de données se termine
//     setTimeout(function () {
//         next()
//     }, 10)
// })



/*
app.use((req, res, next) => {
    const cookie = req.cookies["token"]

    if (cookie) {
        pool.query({
            name: 'find-token',
            text: 'SELECT "USER_ID" FROM public."TOKENS" WHERE "ID" = $1 AND "TIMESTAMP" > NOW() - INTERVAL \'1m\'',
            values: [cookie]
        }, (err, result) => {
            console.log(result)
            if (result.rows.length !== 0) {const value = uuidv4();

                pool.query({
                    name: 'add-token',
                    text: 'INSERT INTO public."TOKENS" ("ID", "USER_ID", "TIMESTAMP") VALUES  ($1, $2, NOW())',
                    values: [value, result.rows[0]["ID"]]
                });

                res.cookie("token", value)




                res.sendStatus(200) // req.user (json copy)
            } else {
                res.sendStatus(404)
            }
            next();
        });
    } else {
        next();
    }
});
*/


app.get("/api/animals", (req, res, next) => {
    console.log("[LOG] : /api/animals")

    selectAllAnimals()
        .then((result) => {
            res.send(result)
        })
});


app.get("/api/animals/:id", (req, res, next) => {
    console.log("[LOG] : /api/animals/" + req.params.id)

    selectAnimalById(req.params.id)
        .then((result) => {
            res.send({animal: result})
        })
});


app.get("/api/login", async (req, res, next) => {
    console.log("[LOG] : /api/login")

    const token = req.cookies["token"]

    if (token) {
        selectUserByTokenQuery(token).then((result) => {
            res.send({user: result});
        })
    } else {
        res.send({user: null});
    }
});


app.post("/api/connect", (req, res, next) => {
    console.log("[LOG] : /api/connect")

    const user = req.body

    selectUserByLoginQuery(user.name, user.hash)
        .then(async (result) => {
            if (result) {
                const token = uuidV4();
                upsetTokenByIdQuery(result["ID"], token)
                res.cookie("token", token, {sameSite: "strict"})
                res.send(result)
            }
        })
});


app.post("/api/register", (req, res, next) => {
    console.log("[LOG] : /api/register")

    const user = req.body;

    countNameQuery(user.name)
        .then((result) => {
            if (result) {
                res.sendStatus(403);
            } else {
                insertUserQuery(uuidV4(), user.name, user.hash, user.email_f)
                    .then(() => {
                        res.sendStatus(201);
                    })
            }
        })
});


app.listen(port);
