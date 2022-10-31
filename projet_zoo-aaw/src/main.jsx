import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'

// Main pages
import Index from "./routes/accueil";
import Liste from "./routes/liste";
import Plan from "./routes/plan";
import Connexion from "./routes/connexion";
import Inscription from "./routes/inscription";

// Children pages
import Animal from "./routes/animal/animal";

// Error page
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "liste",
    element: <Liste />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "animals/:animalId",
        element: <Animal />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "plan",
    element: <Plan />,
    errorElement: <ErrorPage />,
  },
  {
    path: "connexion",
    element: <Connexion />,
    errorElement: <ErrorPage />,
  },
  {
    path: "inscription",
    element: <Inscription />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
