import { useRouteError } from "react-router-dom";

import './error-page.css'

import errorImg from "/annexe/PageErreur/OhNonCringe.jpeg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div id="cringe-div">
        <img id="cringe" src={errorImg}/>
      </div>
      <h1>Oh non ! Cringe !</h1>
      <p>Une erreur inattendue est survenue :O</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}