import { Outlet, Link } from "react-router-dom";
import Menu from '../../header/menu'

export default function Root() {
    return (
        <>
          <Menu />
          <Link to={"/erreur"}>test vers la page d'erreur</Link>
        </>
    );
  }
