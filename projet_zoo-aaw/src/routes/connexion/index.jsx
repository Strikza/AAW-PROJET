import { Link } from 'react-router-dom';

import '../../css/form.css'

export default function Root() {
    return (
        <div>
            <form className="login">
                <h1>Connexion</h1>
                <hr/>
                <div className="column">
                    <p className="label">Nom d'utilisateur</p>
                    <input className="text" id="pseudonyme" type={"text"}></input>
                    <p className="label">Mot de passe</p>
                    <input className="text" id="password" type={"password"}></input>
                </div>
                <input className="button" type="submit" value="Se connecter"></input>
                <hr/>
                <Link to={"/inscription"}>
                    <button className="button">S'inscrire</button>
                </Link>
            </form>
        </div>
    );
  }
