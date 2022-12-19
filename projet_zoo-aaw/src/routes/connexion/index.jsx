import { Link, Form, useNavigate } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import React, { useState } from "react";

import '../../css/form.css'

export default function Root() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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
            resp =  res.status
        })
        return resp
    }

    const handleSubmit = async e => {

        if(name != "" && password != ""){
            e.preventDefault();

            const res = await loginUser({
                name,
                password
            });

            // Navigation après la communication avec le serveur
            try{
                if(res !== 200){
                    console.log("new error")
                    throw new Error("Problème de connexion !")
                }
                else{
                    console.log("Connexion réussi")
                    navigate('/')
                }
            }
            catch(err){
                console.log("get caught ma boy")
                alert("ERREUR :\n Il semblerait que l'une de vos informations de connexion soit erronée")
                setName("")
                setPassword("")
                navigate('/connexion');
            }
        }
        else{
            e.preventDefault();
            alert("ERREUR :\n Il semblerait qu'il manque l'une de vos informations de connexion")
            navigate('/connexion');
        }

        
    }

    return (
        <div>
            <Form 
            className="login" 
            method='post'
            onSubmit={handleSubmit}
              >
                <h1>Connexion</h1>
                <hr/>
                <InputGroup>
                    <div className="column">
                        <p className="label">Nom d'utilisateur</p>
                        <input className="text" type={"text"} value={name} onChange={(e) => setName(e.target.value)}></input>
                        <p className="label">Mot de passe</p>
                        <input className="text" type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}></input>
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
