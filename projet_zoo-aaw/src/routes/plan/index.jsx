import { Outlet, Link, useLoaderData } from 'react-router-dom';

import { getAnimals } from '../animal/animal';

export async function loader() {
  const animals = await getAnimals();
  return { animals };
}

export default function Root() {
  const { animals } = useLoaderData();
    return (
      <div>
        <img id="carte" src="../../../annexe/plan/carte-de-france.jpg"></img>
        {animals.length ? (
          <div>
            {animals.map((animal) => (
              <img style={{zindex: "20", position: "absolute", top: animal["X"], left: animal["Y"]}}
              src = {"../../" + animal["URL"]}/>
            ))}
          </div>
        ) : (
          <p></p>)}
      </div>
    );
      
  }
  