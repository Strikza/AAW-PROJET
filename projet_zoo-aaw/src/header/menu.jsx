import { Link } from "react-router-dom";

import "../css/header.css"

export default function Menu() {
    return (
            <header>
                <Link to={"/accueil"}>
                    <img src="../../annexe/Accueil/lien_accueil.png" className="menu_img" alt="Retour accueil"></img>
                </Link>
                <nav>
                    <ul className="menu">
                        <li className="menu_item">
                            <Link to={"/liste"}>Liste des animaux</Link>
                        </li>
                        <li className="menu_item">
                            <Link to={"/plan"}>Plan</Link>
                        </li>
                        <li className="menu_item">
                            <Link to={"/connexion"}>Connexion/Inscription</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    );
}
  