


export function getUserByLogin(login) {
    return new Promise((resolve) => {
        resolve(fetch("/api/connect", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        }).then((result) => {
            return result.json()
        }))
    });
}

export async function getUserByToken() {
    const result = await (await fetch("/api/login")).json();
    console.log("loader")
    console.log(result.user)
    return result.user;
}