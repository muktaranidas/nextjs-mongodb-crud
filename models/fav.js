import mongoose, {Schema} from "mongoose";

const favSchema = new Schema({
    name: String,
    description: String 
}, {
    timestamps:true
}
);
const  Fav = mongoose.models.Fav ||    mongoose.model("Fav" ,favSchema )
export default Fav; 