import {Link, Form, useNavigate} from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import React, { useState } from "react";
import SHA256 from "crypto-js/sha256";

import "../../../css/form.css"
import {doLogin, useAuthDispatch, useAuthState} from "../../authentification";

function Connection() {

    const navigate = useNavigate();
    const { id } = useAuthState();
    const dispatch = useAuthDispatch();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(0);


    console.log("id : "+id)


    const handleSubmit = e => {
        e.preventDefault();
        setError(0);

        if (name === "") {
            setError(1);
        } else if (password === "") {
            setError(2);
        } else {
            doLogin(dispatch, {name, hash: SHA256(password).toString()})
            if (id) {
                navigate('/favoris')
            } else {
                setError(3);
                setPassword("")
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
    }


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


export default Connection;