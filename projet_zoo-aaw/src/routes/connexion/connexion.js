import { redirect } from "react-router-dom";

export async function tryConnect({request, param}) {
    console.log("try to connect ma boy")

    const formData = await request.formData();
    console.log(request)
    const updates = Object.fromEntries(formData);

    try {
        await fetch("api/connect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updates)
        })
        .then((res) => {
            if(res.status !== 200){
                console.log("new error")
                throw new Error("Probleme de connexion !");
            }
            else{
                console.log("Connection completed")
            }
        })
        return redirect('/accueil')
    } catch(err) {
        console.log("get caught bitch")
        return redirect('/error')
    }
    
}