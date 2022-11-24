import { Outlet, Link } from 'react-router-dom';

import './index.css'

export default function Root() {
    return (
        <div id="page">
            <form>
                <h1>Connexion</h1>
                <hr/>
                <p className="label">Nom d'utilisateur</p>
                <div>
                    <input className="text-in" id="pseudonyme" type={"text"}></input>
                </div>
                <p className="label">Mot de passe</p>
                <div>
                    <input className="text-in" id="password" type={"password"}></input>
                </div>
                <input className="submit-in" type="submit" value="Se connecter"></input>
                <Link to={"/inscription"}>Pas inscrit ? Cliquez ici</Link>
            </form>
        </div>
    );
  }
