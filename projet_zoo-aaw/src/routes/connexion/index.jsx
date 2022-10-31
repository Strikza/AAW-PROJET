import { Outlet, Link } from 'react-router-dom';
import Menu from '../../header/menu'

export default function Root() {
    return (
        <>
          <Menu />
          <h1>C'est la page de connexion</h1>
          <form>
            <input id="pseudonyme" type={"text"} placeholder="pseudonyme"></input>
            <input id="password" type={"text"} placeholder="password"></input>
            <button>se connecter</button>
          </form>
          <Link to={"/inscription"}>Pas inscrit ? Cliquez ici</Link>
        </>
    );
  }
