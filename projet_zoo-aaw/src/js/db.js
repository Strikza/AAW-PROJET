const {Pool} = require('pg');
require("dotenv").config();

const pool = new Pool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
})


async function selectUserByTokenQuery(id) {
    return new Promise((resolve) => {
        pool.query({
            name: 'select-user-by-token',
            text: 'SELECT public."USERS"."ID", public."USERS"."NAME", public."USERS"."PERMISSION" FROM public."TOKENS", public."USERS" WHERE public."TOKENS"."USER_ID" = public."USERS"."ID" AND public."TOKENS"."ID" = $1 AND "TIMESTAMP" > NOW() - INTERVAL \'7s\'',
            values: [id]
        }, (err, result) => {
            resolve(result.rows.length ? result.rows[0] : null);
        })
    });
}


function selectUserByLoginQuery(name, hash) {
    return new Promise((resolve) => {
        pool.query({
            name: 'select-user-by-login',
            text: 'SELECT "ID", "NAME", "PERMISSION" FROM public."USERS" WHERE "NAME" = $1 AND "PASSWORD" = $2',
            values: [name, hash]
        }, (err, result) => {
            resolve(result.rows ? result.rows[0] : null);
        });
    });
}


function upsetTokenByIdQuery(id, token) {
    pool.query({
        name: 'upsert-token',
        text: 'INSERT INTO public."TOKENS" ("ID", "USER_ID", "TIMESTAMP") VALUES ($1, $2, NOW()) ON CONFLICT ("USER_ID") DO UPDATE SET "ID" = $1, "TIMESTAMP" = NOW()',
        values: [token, id]
    });
}


async function insertUserQuery(id, name, hash, email) {
    await pool.query({
        name: 'insert-user',
        text: 'INSERT INTO public."USERS" ("ID", "NAME", "PASSWORD", "EMAIL") VALUES  ($1, $2, $3, $4)',
        values: [id, name, hash, email]
    });
}


async function countNameQuery(name) {
    return await pool.query({
        name: 'count-name',
        text: 'SELECT count(*) FROM public."USERS" where "NAME" = $1',
        values: [name]
    }, (err, result) => {
        return parseInt(result.rows[0]["count"])
    })
}


function selectAnimalById(id) {
    return new Promise((resolve) => {
        pool.query({
            name: 'select-animal-by-id',
            text: 'SELECT * FROM public."ANIMALS" where "ID" = $1',
            values: [id]
        }, (err, result) => {
            resolve(err ? null : result.rows.length ? result.rows[0] : null);
        });
    });
}


function selectAllAnimals() {
    return new Promise((resolve) => {
        pool.query({
            name: 'select-all-animals',
            text: 'SELECT * FROM public."ANIMALS"'
        }, (err, result) => {
            resolve(result.rows);
        });
    });
}


module.exports = {
    selectUserByTokenQuery,
    selectUserByLoginQuery,
    upsetTokenByIdQuery,
    insertUserQuery,
    countNameQuery,
    selectAnimalById,
    selectAllAnimals
};