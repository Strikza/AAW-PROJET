import { Outlet, Link } from 'react-router-dom';
import Menu from '../../header/menu'

export default function Root() {
    return (
        <>
          <Menu />
          <h1>C'est la liste</h1>
          <Link to={"/liste/animals/1"}>Numéro 1</Link>
          <div id="detail">
            <Outlet />
          </div>
        </>
    );
  }
