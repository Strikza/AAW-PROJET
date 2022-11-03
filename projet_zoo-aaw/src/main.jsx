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

let Comp = ()=>{
  return <div>Salut mon giga BG</div>;
 }

 class CompClass extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      animals: []
  }
  }

  render(){
    return(
      <div>
        <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.animals.map(({id, name}) =>{
                                return(
                                        <tr>
                                            <td>{id}</td> 
                                            <td>{name}</td>
                                        </tr> 
                               )      
                        })
                        // this.state.events.map(({id, name}) =>
                        //     <tr>
                        //         <td>{id}</td> 
                        //         <td>{name}</td>
                        //     </tr>                
                        // )
                    }
                    </tbody>
                </table>
      </div>
    )
  }

  componentDidMount() {
    // Appel vers notre serveur
    fetch('/api/animals')
        .then((res) => res.json()) // pas besoins de 'return' car il n'y qu'une seule instruction
        .then((animalsReponse) => {
            // on met à jour l'état de notre composant
            // ce qui forcera son rendu, donc l'appel à la méthode render
            this.setState({animals: animalsReponse})
        })
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <CompClass/>
  </>
)
