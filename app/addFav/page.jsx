"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function AddFav(){
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const router =useRouter()
const  handleSubmit =async (e)=>{
    e.preventDefault();
    if(!name || !description){
        alert("Title and Description are required")
        return;
    }
    try{
        const res = await fetch("http://localhost:3000/api/favs" , {
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify({name,description})
        })
        if(res.ok){
            router.push("/")
            router.refresh() 
        }else{
            throw new Error ("Failed to create a topic")
        }

    }
        catch(error){
            console.log(    )

        }
}
    return(
        <form onSubmit={handleSubmit}  action="" className="flex flex-col gap-2">
            <input onChange={(e) => setName(e.target.value) } value= {name} className="border border-slate-500 px-8 py-2" type="text" placeholder="Fav Title" />
            <input onChange={(e) => setDescription(e.target.value) } value= {description} className="border border-slate-500 px-8 py-2" type="text" placeholder="Fav Description" />
            <button type="submit" className="bg-pink-500 font-bold text-white py-3 px-6 w-fit">Add FavStart</button>
        </form>
    )
}