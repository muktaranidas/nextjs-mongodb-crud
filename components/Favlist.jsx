import {HiPencilAlt} from "react-icons/hi"
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { ClientPageRoot } from "next/dist/client/components/client-page";
const getFavs = async () => {
  try{

    const res = await fetch("http://localhost:3000/api/favs" ,{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error("Failed to fetch favs")
    }
    return res.json()
  } catch(error){
     Console.log("Error loading favs: " , error)

  }
}


export default async function Favlist() {
  const {favs} = await getFavs()
  return (
  <>
  {favs.map((fav) => (

  <div key={fav._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
    <div>
      <h2 className="font-bold text-2xl">{fav.name}</h2>
      <div>{fav.description}</div>
    </div>
    <div>
      <div className="flex gap-2">
        <RemoveBtn  id={fav._id}></RemoveBtn>
        <Link href={`/editFav/${fav._id}`}>
        <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  </div>
  ))}
  
  </>
  );
}
