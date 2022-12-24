import { Link, Form, useNavigate } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import React, { useState } from "react";
import SHA256 from "crypto-js/sha256";

import "../../../css/form.css"


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verification, setVerification] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(0);

    async function registerUser(credentials) {

        let resp;

        await fetch("/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then((res) => {
            resp =  res.status
        })
        return resp
    }

    function empty_input() {
        if (name == "") {
            setError(1);
            return true;
        } else if (password == "") {
            setError(2);
            return true;
        } else if (verification == "") {;
            setError(3);
            return true;
        }
        return false;
    }

    function illogic_input() {
        if (password !== verification) {
            setVerification("");
            setError(4);
            return true;
        }
        return false;
    }

    const handleSubmit = async e => {
        setError(0);
        e.preventDefault();

        if (!(empty_input() || illogic_input())) {
            const hash = SHA256(password).toString();
            const email_f = email === "" ? null : email;
            const res = await registerUser({
                name,
                hash,
                email_f
            });

            // Navigation après la communication avec le serveur
            if (res === 403) {
                setError(5);
            } else if (res !==201) {
                setError(6);
            } else {

            }
        }
    }

    function renderError() {
        switch (error) {
            case 1:
                return <div className="error">Veillez renseigner un nom d'utilisateur !</div>;
            case 2:
                return <div className="error">Veillez renseigner un mot de passe !</div>;
            case 3:
                return <div className="error">Veillez confirmer le mot de passe !</div>;
            case 4:
                return <div className="error">Les mots de passe ne sont pas identiques !</div>;
            case 5:
                return <div className="error">Ce nom d'utilisateur est déjà utilisé !</div>;
            case 6:
                return <div className="error">Une erreur est survenue, veuillez réessayer !</div>;
        }
    };

    return (
        <div>
            <Form className="login" method='post'onSubmit={handleSubmit}>
                <h1>Inscription</h1>
                <hr/>
                {renderError()}
                <InputGroup>
                    <div className="split">
                        <div className="column">
                            <p className="label">Nom d'utilisateur</p>
                            <input className="text" type={"text"} value={name} onChange={(e) => setName(e.target.value)}></input>
                            <p className="label">Mot de passe</p>
                            <input className="text" type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className="column">
                            <p className="label">E-mail (optionnel)</p>
                            <input className="text" type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <p className="label">Vérification</p>
                            <input className="text" type={"password"} value={verification} onChange={(e) => setVerification(e.target.value)}></input>
                        </div>
                    </div>
                    <input className="button" type="submit" value="S'inscrire"></input>
                </InputGroup>
                <hr/>
                <Link to={"/connexion"}>
                    <button className="button">Se connecter</button>
                </Link>
            </Form>
        </div>
    );
}


export default Registration;