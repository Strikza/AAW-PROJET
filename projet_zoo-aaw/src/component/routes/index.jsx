import {createBrowserRouter} from "react-router-dom";
import React from "react";

import Layout from "../layout";
import Favorite from "../pages/favorite";
import Registration from "../pages/inscription";
import Connection from "../pages/connexion";
import Home from "../pages/home";
import Error from "../pages/error";
import Plan, {planLoader} from "../pages/plan";

import AnonymousRoute from "./AnonymousRoute";
import PrivateRoute from "./PrivateRoute";
import Animals, {rootLoader} from "../pages/animals";
import Details, {animalLoader} from "../pages/animals/details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                errorElement: <Error/>,
            },
            {
                path: "/animals",
                element: <Animals/>,
                loader: rootLoader,
                errorElement: <Error/>,
                children: [
                    {
                        path: ":animalId",
                        element: <Details/>,
                        loader: animalLoader,
                        errorElement: <Error/>,
                    },
                ],
            },
            {
                path: "/plan",
                element: <Plan/>,
                loader: planLoader,
                errorElement: <Error/>,
            },
            {
                path: "/favoris",
                element: <PrivateRoute/>,
                errorElement: <Error/>,
                children: [
                    {
                        path: "/favoris",
                        element: <Favorite/>,
                        errorElement: <Error/>,
                    },
                ],
            },
            {
                path: "/connexion",
                element: <AnonymousRoute/>,
                errorElement: <Error/>,
                children: [
                    {
                        path: "/connexion",
                        element: <Connection/>,
                        errorElement: <Error/>,
                    },
                ],
            },
            {
                path: "/inscription",
                element: <AnonymousRoute/>,
                errorElement: <Error/>,
                children: [
                    {
                        path: "/inscription",
                        element: <Registration/>,
                        errorElement: <Error/>,
                    },
                ],
            }
        ]
    }
]);


export default router;