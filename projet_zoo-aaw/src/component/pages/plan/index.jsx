import {useLoaderData} from 'react-router-dom';
import {getAnimals} from "../animals/animalAPI";


export async function planLoader() {
    const animals = await getAnimals();
    return {animals};
}

function Plan() {
    const {animals} = useLoaderData();
    return (
        <div>
            <img id="carte" src="../../../annexe/plan/carte-de-france.jpg"></img>
            {animals.length ? (
                <div>
                    {animals.map((animal) => (
                        <img style={{zindex: "20", position: "absolute", top: animal["X"], left: animal["Y"]}}
                             src={"../../" + animal["URL"]}/>
                    ))}
                </div>
            ) : (
                <p></p>)}
        </div>
    );

}

export default Plan;