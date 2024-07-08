import mongoose from "mongoose";
import { ClientPageRoot } from "next/dist/client/components/client-page";

const connectMongoDB =async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB.")
    }
    catch(error){
        console.log(error)

    }
}
export default connectMongoDB