import { Link } from "react-router-dom";
import {useAuthState} from "../../authentification";

import "../../../css/header.css"


function Header() {

    const { id } = useAuthState();

    return (
            <header>
                <Link to={"/"}>
                    <img src="../../../../annexe/Accueil/lien_accueil.png" className="menu_img" alt="Retour accueil"></img>
                </Link>
                <nav>
                    <ul className="menu">
                        <li className="menu_item">
                            <Link to={"/animals"}>Liste des animaux</Link>
                        </li>
                        <li className="menu_item">
                            <Link to={"/plan"}>Plan</Link>
                        </li>
                        {
                            id && <li className="menu_item"><Link to={"/favoris"}>Favoris</Link></li>
                        }
                        {
                            !id && <li className="menu_item"><Link to={"/connexion"}>Connexion/Inscription</Link></li>
                        }
                    </ul>
                </nav>
            </header>
    );
}


export default Header;