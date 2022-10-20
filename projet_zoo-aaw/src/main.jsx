import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import Index from "./routes/accueil";
import Liste from "./routes/liste";
import Plan from "./routes/plan";
import Connexion from "./routes/connexion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/liste",
    element: <Liste />,
  },
  {
    path: "/plan",
    element: <Plan />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
