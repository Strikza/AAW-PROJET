import { Link, Form } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { tryConnect } from './connexion';
import { useState } from "react";

import '../../css/form.css'

export async function action({request, param}){
    return tryConnect({request, param});
}

export default function Root() {

    const [user, setUser] = useState("");

    const [password, setPassword] = useState("");

    const login=()=>{
        fetch("/api/connect", {
            method:"POST",
            body:{
                user,
                password
            }
        })
    }

    return (
        <div>
            <Form 
            className="login" 
            method='post'
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
                    <button className="button" onClick={login}>S'inscrire</button>
                </Link>
            </Form>
        </div>
    );
  }
