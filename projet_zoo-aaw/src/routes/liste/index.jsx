import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    return (
        <>
          <h1>C'est la liste</h1>
          <Link to={"/liste/animals/1"}>Numéro 1</Link>
          <div id="detail">
            <Outlet />
          </div>
        </>
    );
  }
