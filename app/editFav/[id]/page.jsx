import EditFavForm from "@/components/editFavForm";
const getTopicById = async(id)=>{
try{
    const res = await fetch(`http://localhost:3000/api/favs/${id}`, {cache:"no-store"})
    if(!res.ok){
        throw  new Error("Failed to fetch fav")
    }
    return res.json()
}catch(error){
    console.log(error)
}
}
export default async function  editFav({params}){
    const {id} = params
    const {fav} = await getTopicById(id)
    const {name, description} = fav
    return <EditFavForm id={id} name={name} description={description}> </EditFavForm>
    
}