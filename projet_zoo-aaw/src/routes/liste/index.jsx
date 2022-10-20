import { Outlet } from 'react-router-dom';
import Menu from '../../header/menu'

export default function Root() {
    return (
        <>
          <Menu />
          <h1>C'est la liste</h1>
          <a href="/liste/animal/1">Numéro 1</a>
          <div id="detail">
            <Outlet />
          </div>
        </>
    );
  }
