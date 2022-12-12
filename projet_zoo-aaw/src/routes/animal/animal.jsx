import { Form, useLoaderData } from "react-router-dom";
import { getAnimal } from "./animal";


export async function loader({ params }) {
  const animal = await getAnimal(params.animalId);
  return { animal }
}

export default function Animal() {
  const { animal } = useLoaderData();
  console.log(animal);
  const url = "../../" + animal["0"]["URL"]
  console.log(url);

  return (
    <div id="animal">
      <div>
        {animal.length ? (
          <div>
            {animal.map((a) => ( 
              <div>
                {a["URL"] ? (
                  <img src = {url}/>
                ) : (
                  <i>No Image</i>
                )}{" "}
                <h1>
                  {a["NAME"] ? (
                    <>
                      {a["NAME"]}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                </h1>
                <p>
                  {a["DESC"] ? (
                    <>
                      {a["DESC"]}
                    </>
                  ) : (
                    <i>No Description</i>
                  )}{" "}
                  <Favorite animal={animal} />
                </p>
              </div>
            ))}
          </div>
          ) : (
            <p>
              <b><i>Déso bro, pas d'animal :3</i></b>
            </p>
        )}
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