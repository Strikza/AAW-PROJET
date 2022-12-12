import { 
  Outlet,
   Link,
   useLoaderData,
   Form,
} from 'react-router-dom';

import { getAnimals/*, createAnimal */} from "../animal/animal";


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
          <div id="detail">
            <Outlet />
          </div>

          <div id="animal_list">

            {animals.length ? (
              <ul>
                {animals.map((animal) => (
                  <li key={animal["ID"]}>
                    <Link to={`animals/${animal["ID"]}`}>
                      {animal["NAME"] ? (
                      <>
                        {animal["NAME"]}
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
