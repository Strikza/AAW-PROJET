
export async function getAnimals() {
    const animals = await fetch("/api/animals")
    return await animals.json()
}

export async function getAnimal(id) {
    const animalJson = await fetch("/api/animals/" + id)
    return await animalJson.json()
}