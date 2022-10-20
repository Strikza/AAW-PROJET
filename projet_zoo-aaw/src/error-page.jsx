import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh non !</h1>
      <p>Désolé, une erreur inattendue est survenue :/</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}