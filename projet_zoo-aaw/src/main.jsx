import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'

// Main page
import Index from "./routes/accueil";

// Children pages
import Liste, { 
  loader as rootLoader,
  action as rootAction
} from "./routes/liste";
import Plan from "./routes/plan";
import Connexion from "./routes/connexion";
import Inscription from "./routes/inscription";
import Animal, {
  loader as animalLoader,
} from "./routes/animal/animal.jsx";

// Error page
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "liste",
        element: <Liste />,
        loader: rootLoader,
        action: rootAction,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "animals/:animalId",
            element: <Animal />,
            loader: animalLoader,
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
    ],
  },
]);

let App = ()=>{
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
  </>
)
