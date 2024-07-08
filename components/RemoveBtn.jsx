"use client";
import {HiOutlineTrash} from "react-icons/hi"
import {useRouter} from "next/navigation"

export default function RemoveBtn({id}){
    const router = useRouter()
    const removeFav = async ( ) => {
        const confirmed = confirm("Are you sure?")
   
    if(confirmed){
        const res = await fetch(`http://localhost:3000/api/favs?id=${id}`, {
            method:"DELETE",
        })
        if(res.ok){

            router.refresh() 
        }


    } }
    return(
        <button onClick={removeFav} className="text-red-400">
            <HiOutlineTrash size={24}/>
             </button>
    )
}