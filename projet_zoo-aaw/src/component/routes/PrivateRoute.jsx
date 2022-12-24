import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import { useAuthState } from "../authentification";


function PrivateRoute() {

    const { id } = useAuthState();
    console.log("PRIVATE - id : "+id)
    return id ? <Outlet/> : <Navigate to="/connexion"/>;
}


export default PrivateRoute;