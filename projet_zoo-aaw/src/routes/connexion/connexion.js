import { redirect } from "react-router-dom";

export async function tryConnect({request, param}) {
    console.log("try to connect ma boy")
    const navigate = useNavigate

    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    try {
        await fetch("api/connexion", {
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
        })
        return redirect('/accueil')
    } catch(err) {
        console.log("get catched bitch")
        return redirect('/accueil')
    }
    
}