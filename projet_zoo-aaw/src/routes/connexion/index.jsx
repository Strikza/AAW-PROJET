import {Link, Form, useNavigate, Navigate} from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import React, { useState } from "react";
import SHA256 from "crypto-js/sha256";

import '../../css/form.css'

export default function Root() {
    /*
    if (fetch("/api/login").then((response) => response.json())) {
        return <Navigate to="/"/>;
    }*/

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(0);

    async function loginUser(credentials) {

        let resp;

        await fetch("/api/connect", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then((res) => {
                resp = res.status
            })
        return resp
    }

    const handleSubmit = async e => {
        setError(0);
        e.preventDefault();

        if (name === "") {
            setError(1);
        } else if (password === "") {
            setError(2);
        } else {
            const hash = SHA256(password).toString();
            const res = await loginUser({
                name,
                hash
            });

            // Navigation après la communication avec le serveur
            if (res !== 200) {
                setError(3);
                setPassword("")
            } else {
                navigate('/')
            }
        }
    }

    function renderError() {
        switch (error) {
            case 1:
                return <div className="error">Veillez renseigner le nom d'utilisateur !</div>;
            case 2:
                return <div className="error">Veillez renseigner le mot de passe !</div>;
            case 3:
                return <div className="error">Votre nom d'utilisateur ou votre mot de passe est incorrect !</div>;
        }
    };

    return (
        <div>
            <Form className="login" method='post' onSubmit={handleSubmit}>
                <h1>Connexion</h1>
                <hr/>
                <InputGroup>
                    <div className="column">
                        {renderError()}
                        <p className="label">Nom d'utilisateur</p>
                        <input className="text" type={"text"} value={name}
                               onChange={(e) => setName(e.target.value)}></input>
                        <p className="label">Mot de passe</p>
                        <input className="text" type={"password"} value={password}
                               onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button className="button" type="submit" value="Se connecter">Se connecter</button>
                </InputGroup>
                <hr/>
                <Link to={"/inscription"}>
                    <button className="button">S'inscrire</button>
                </Link>
            </Form>
        </div>
    );
}
