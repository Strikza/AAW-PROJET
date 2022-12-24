import Header from "./header";
import Footer from "./footer";
import {Outlet} from "react-router-dom";


function Layout() {
    return (
        <div className="layout">
            <Header/>
            <div className="page" id="children">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}


export default Layout;