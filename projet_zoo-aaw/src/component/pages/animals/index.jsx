import {Outlet, Link, useLoaderData} from 'react-router-dom';
import {getAnimals} from "./animalAPI";

import "../../../css/animals.css"

export async function rootLoader() {
    const animals = await getAnimals();
    return {animals};
}


function Animals() {

    const {animals} = useLoaderData();

    const empty = () => {
        return (
            <div className="error-animals">
                Déso bro, pas d'animaux :3
            </div>
        )
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const list = () => {
        return (
            <ul>
                {animals.map((animal) => (
                    <li key={animal.ID}>
                        <Link to={animal.ID} style={{textDecoration: 'none'}} onClick={scrollToTop}>
                            {item(animal)}
                            {animal.favorite && <span>★</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    const item = (animal) => {
        return (
            <div className="animal-card">
                <div className="preview">
                    {animal.URL ? <img src={"../../" + animal.URL}/> : "Aucune image"}
                </div>
                <div className="h-separator"></div>
                <div className="card-name">
                    {animal.NAME}
                </div>
            </div>
        )
    }

    return (
        <div className="global-container">
            <div className="details">
                <Outlet/>
            </div>
            <div className="animals-title">
                Animaux du Zoo
            </div>
            <div className="animals-container">
                {animals.length ? list() : empty()}
            </div>
        </div>
    );
}

export default Animals;