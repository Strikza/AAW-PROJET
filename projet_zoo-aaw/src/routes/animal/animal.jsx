import { Form, useLoaderData } from "react-router-dom";
import { getAnimal } from "./animal";


export async function loader({ params }) {
  return getAnimal(params.animalId);
}



export default function Animal() {
  const animal = useLoaderData();
  console.log(animal);

  return (
    <div id="animal">
      <div>
        <h1>
          {animal["NAME"] ? (
            <>
              {animal["NAME"]}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite animal={animal} />
        </h1>

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
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