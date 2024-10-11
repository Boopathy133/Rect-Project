// mongodb+srv://boopathy:boopathylove@cluster0.mtxurgs.mongodb.net/?
import mongoose, { Mongoose } from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://boopathy:boopathylove@cluster0.mtxurgs.mongodb.net/tomato').then(()=>console.log("DB connected"));
}