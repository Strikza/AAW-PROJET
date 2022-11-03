import { Outlet, Link } from "react-router-dom";
import Menu from '../../header/menu'

export default function Root() {
    return (
        <>
          <Menu />
          <div id="Children">
            <Outlet />
          </div>
          <Link to={"/erreur"}>test vers la page d'erreur</Link>
        </>
    );
  }
