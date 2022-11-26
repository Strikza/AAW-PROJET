import { Link } from "react-router-dom";

import '../../css/form.css'
import '../../css/header.css'
import '../../css/main.css'

export default function Root() {
    return (
        <div>
            <form className="login">
                <h1>Inscription</h1>
                <hr/>
                <div className="split">
                    <div className="column">
                        <p className="label">Nom d'utilisateur</p>
                        <input className="text" id="pseudonyme" type={"text"}></input>
                        <p className="label">Mot de passe</p>
                        <input className="text" id="password" type={"password"}></input>
                    </div>
                    <div className="column">
                        <p className="label">E-mail</p>
                        <input className="text" id="pseudonyme" type={"email"}></input>
                        <p className="label">Vérification</p>
                        <input className="text" id="password" type={"password"}></input>
                    </div>
                </div>
                <input className="button" type="submit" value="S'inscrire"></input>
                <hr/>
                <Link to={"/connexion"}>
                    <button className="button">Se connecter</button>
                </Link>
            </form>
        </div>
    );
  }
  