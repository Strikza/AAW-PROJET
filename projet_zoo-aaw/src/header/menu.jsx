import { Link } from "react-router-dom";

import "../css/header.css"
import {useEffect, useState} from "react";

export default function Menu() {

    const [user, setUser] = useState(undefined)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch("/api/login")
            .then((rep) => {
                console.log(rep)
                if (rep.status === 408) {
                    setLoad(true)
                } else {
                    return rep.json()
                }
            })
            .then(user => {
                console.log("user ", user)
            setUser(user)
            setLoad(true)
        })
    }, [])


    return (
            <header>
                <Link to={"/"}>
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
                            {
                                load && user && <Link to={"/favoris"}>Favoris</Link>
                            }
                        </li>
                        <li className="menu_item">
                            {
                                load && !user ? <Link to={"/connexion"}>Connexion/Inscription</Link> : <div>{load+""}</div>
                            }
                        </li>
                    </ul>
                </nav>
            </header>
    );
}
  