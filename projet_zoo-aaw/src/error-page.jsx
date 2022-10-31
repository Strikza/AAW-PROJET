import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div id="cringe-div">
        <img id="cringe" src="../annexe/PageErreur/OhNonCringe.jpeg"/>
      </div>
      <h1>Oh non ! Cringe !</h1>
      <p>Une erreur inattendue est survenue :O</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}