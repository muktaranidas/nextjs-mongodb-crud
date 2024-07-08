"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function EditFavForm({id,name,description}){
    const [newName, SetNewName] = useState(name)
    const [newDescription, setNewDescription] = useState(description)

    const router = useRouter()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await fetch(`http://localhost:3000/api/favs/${id}` , {
                method:"PUT",
                headers:{
                    "Content-type": "application/json",

                },
                body: JSON.stringify({newName, newDescription})
            }); 
            console.log(res )
            if(!res.ok){
                
                throw new Error("Failed to update topic")
            }
            router.push("/")
            router.refresh()

        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
        <input onChange={(e) => SetNewName(e.target.value)}  value={newName} className="border border-slate-500 px-8 py-2" type="text" placeholder="Fav Title" />
        <input  onChange={(e) => setNewDescription(e.target.value)}  value={newDescription}  className="border border-slate-500 px-8 py-2" type="text" placeholder="Fav Description" />
        <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit">Update FavStart</button>
    </form>
    )
}