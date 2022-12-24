import {Form, useLoaderData} from "react-router-dom";
import {getAnimal} from "../animalAPI";

import "../../../../css/details.css"


export async function animalLoader({params}) {
    return (await getAnimal(params.animalId)).animal
}


function Details() {

    const animal = useLoaderData();

    const notfound = () => {
        return (
            <div className="detail-error">
                Désolé, l'animal n'a pas pu être trouvé.
            </div>
        );
    }

    const found = () => {
        return (
            <div className="wrap-details">
                <div className="view-container">
                    <div className="view">
                        {animal.URL ? <img src={"../../" + animal.URL}/> : "Aucune image"}
                    </div>
                </div>
                <div className="v-separator"></div>
                <div className="desc-container">
                    <div className="animal-name">
                        {animal.NAME ? animal.NAME : "Aucun nom"}
                    </div>
                    <div className="animal-desc">
                        {animal.DESC ? animal.DESC : "Aucune description"}
                    </div>
                    <Favorite animal={animal}/>
                </div>
            </div>
        )
    }

    return (
        <>
            {animal ? found() : notfound()}
            <div className="h-separator-details"></div>
        </>
    );
}

function Favorite({animal}) {
    // yes, this is a `let` for later
    let favorite = animal.favorite;
    return (
        <div>
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
        </div>
    );
}


export default Details;