
export async function getAnimals() {
    const animals = await fetch("/api/animals")
    return await animals.json()
}

export async function getAnimal(id) {
    const animalsJson = await fetch("/api/animals")
    const animals = animalsJson.json()
    let res = {id:0, name: "No name broooo"}
    // for( let i = 0; i < animals.length; ++i){
    //     if(animals[i].id === id){
    //         res = animals[i]
    //     }
    // }
    return res
}