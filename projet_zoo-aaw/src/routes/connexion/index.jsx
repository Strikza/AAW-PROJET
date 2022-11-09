import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    return (
        <>
          <h1>C'est la page de connexion</h1>
          <form>
            <input id="pseudonyme" type={"text"} placeholder="pseudonyme"></input>
            <input id="password" type={"password"} placeholder="password"></input>
            <button>se connecter</button>
          </form>
          <Link to={"/inscription"}>Pas inscrit ? Cliquez ici</Link>
        </>
    );
  }
