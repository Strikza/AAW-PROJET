import { Link, Form } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { tryConnect } from './connexion';

import '../../css/form.css'

export async function action({request, param}){
    await tryConnect({request, param});
}

export default function Root() {
    return (
        <div>
            <Form className="login" method='post'>
                <h1>Connexion</h1>
                <hr/>
                <InputGroup>
                    <div className="column">
                        <p className="label">Nom d'utilisateur</p>
                        <input className="text" id="pseudonyme" type={"text"}></input>
                        <p className="label">Mot de passe</p>
                        <input className="text" id="password" type={"password"}></input>
                    </div>
                    <button className="button" type="submit" value="Se connecter">Se connecter</button>
                </InputGroup>
                
                <hr/>
            </Form>
            <Link to={"/inscription"}>
                <button className="button">S'inscrire</button>
            </Link>
        </div>
    );
  }
