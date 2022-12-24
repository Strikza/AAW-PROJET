import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import { useAuthState } from "../authentification";


function AnonymousRoute() {

    const { id } = useAuthState();
    console.log("ANONYMOUS - id : "+id)
    return id ? <Navigate to="/"/> : <Outlet/>;
}


export default AnonymousRoute;