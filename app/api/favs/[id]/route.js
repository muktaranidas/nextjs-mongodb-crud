import connectMongoDB from "@/libs/mongodb";
import Fav from "@/models/fav";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newName: name, newDescription:description} = await request.json();
    await connectMongoDB();
    await Fav.findByIdAndUpdate(id,{name,description});
    return NextResponse.json({message:"Fav Updated"} , 
        {status:200}
    )
}
export async function GET(request, {params}){
    const {id} = params
    await connectMongoDB();
    const fav = await Fav.findOne({_id:id})
    return NextResponse.json({fav} , { status:200})

}