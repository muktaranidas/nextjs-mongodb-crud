import connectMongoDB from "@/libs/mongodb";
import Fav from "@/models/fav";
import { NextResponse } from "next/server";

export async function POST (request ){
    const   {name, description} = await request.json();
    await connectMongoDB();
    await Fav.create({name,description})  
    return NextResponse.json({message: "Fav Created"} , {status: 201})
} 

export async function GET(){
    await connectMongoDB()
    const favs = await Fav.find()
    return NextResponse.json({favs})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Fav.findByIdAndDelete(id)
    return NextResponse.json({message: "Fav is deleted successfully"}, {status:200})
}