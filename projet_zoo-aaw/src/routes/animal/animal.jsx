import { Form, useLoaderData } from "react-router-dom";
import { getAnimal } from "./animal";


export async function loader({ params }) {
  const animal = await getAnimal(params.animalId);
  return { animal }
}

export default function Animal() {
  // Tableau d'un élément contenant un animal
  const { animal } = useLoaderData();

  return (
    <div id="animal">
      <div>
        <div>
          {animal["0"]["URL"] ? (
            <img src = {"../../" + animal["0"]["URL"]}/>
          ) : (
            <i>No Image</i>
          )}{" "}
          <h1>
            {animal["0"]["NAME"] ? (
              <>
                {animal["0"]["NAME"]}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
          </h1>
          <p>
            {animal["0"]["DESC"] ? (
              <>
                {animal["0"]["DESC"]}
              </>
            ) : (
              <i>No Description</i>
            )}{" "}
            <Favorite animal={animal["0"]} />
          </p>
        </div>
      </div>
    </div>
  );
}

function Favorite({ animal }) {
  // yes, this is a `let` for later
  let favorite = animal.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}