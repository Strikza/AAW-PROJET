import { Outlet, Link } from "react-router-dom";

export default function Menu() {
    return (
        <>
        <header>
            <Link to={"/"}><img src="../../annexe/Accueil/lien_accueil.png" id="menu_img"></img></Link>
            <nav>
                <ul id="menu">
                    <li className="menu_item">
                        <Link to={"/liste"}>Liste des animaux</Link>
                    </li>
                    <li className="menu_item">
                        <Link to={"/plan"}>Plan</Link>
                    </li>
                    <li className="menu_item" id="connexion">
                        <Link to={"/connexion"}>Connexion/Inscription</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
  }
  