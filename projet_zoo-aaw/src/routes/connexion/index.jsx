import { Link, Form } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import React, { useState } from "react";

import '../../css/form.css'

export async function action({request, param}){
    return tryConnect({request, param});
}

export default function Root() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(credentials) {
        try{
            await fetch("/api/connect", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            .then((res) => {
                if(res.status !== 200){
                    console.log("new error")
                    throw new Error("Probleme de connexion !");
                }
                else{
                    console.log("Connection completed")
                }
            })
            .then(data => data.json())
            return redirect('/accueil')
        }
        catch(err){
            console.log("get caught bitch")
            return redirect('/error')
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            user,
            password
        });
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
                        <input className="text" type={"text"} value={user} onChange={(e) => setUser(e.target.value)}></input>
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
