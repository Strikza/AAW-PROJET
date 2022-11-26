import { 
  Outlet
 } from "react-router-dom";

import Menu from "../../header/menu";
import "../../css/main.css"

export default function Root() {
    return (
        <div>
            <Menu/>
            <div className="page" id="Children">
                <Outlet/>
            </div>
        </div>
    );
  }
