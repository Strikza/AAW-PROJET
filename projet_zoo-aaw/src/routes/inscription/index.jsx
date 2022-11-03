import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
          <h1>C'est la page d'inscription</h1>
          <Link to={"/connexion"}>Déjà inscrit ? Cliquez ici</Link>
        </>
    );
  }
  