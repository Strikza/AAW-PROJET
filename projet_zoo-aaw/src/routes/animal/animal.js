
export async function getAnimals() {
    const animals = await fetch("/api/animals")
    return await animals.json()
}

export async function getAnimal(id) {
    const animalsJson = await fetch("/api/animals")
    const animals = animalsJson.json()
    const query = {
        name: 'fetch-animals',
        text: 'SELECT * FROM public."ANIMALS" where "ID" = $1',
        values: [id],
      }
      
    let res
    
      pool.query(query, (err, result) => {
        res = result.rows
        pool.end()
    })

    return res
}