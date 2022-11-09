import { 
  Outlet,
   Link,
   useLoaderData,
   Form,
} from 'react-router-dom';

//import { getAnimals, createAnimal } from "../../serveur.js";

export async function getAnimals(query) {
  const res = await fetch("/api/animals/test")
  return await res.json();
}

export async function loader() {
  const animals = await getAnimals();
  return { animals };
}

export async function action() {
  //await createAnimal();
}

export default function Root() {
    const { animals } = useLoaderData();
    return (
        <>
          <Form method="post">
            <button type="submit">Ajoute mwa :3</button>
          </Form>

          <div id="detail">
            <Outlet />
          </div>

          <div id="animal_list">

            {animals.length ? (
              <ul>
                {animals.map((animal) => (
                  <li key={animal.id}>
                    <Link to={"animals/${animal.id}"}>
                      {animal.name ? (
                      <>
                        {animal.name}
                      </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {animal.favorite && <span>★</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <b><i>Déso bro, pas d'animaux :3</i></b>
              </p>
            )}
          </div>
        </>
    );
  }
