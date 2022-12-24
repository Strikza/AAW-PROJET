import React from "react";
import * as ReactDOMClient from "react-dom/client";
import {AuthProvider} from "./component/authentification";
import {RouterProvider} from "react-router-dom";
import router from "./component/routes";

import "./css/index.css"


function App() {
    return (
        <div className="app">
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>
        </div>
    );
}

ReactDOMClient.createRoot(document.getElementById('root')).render(<App/>)