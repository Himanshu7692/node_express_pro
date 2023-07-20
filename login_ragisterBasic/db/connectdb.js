import mongoose from "mongoose";
const connectDB=async (DATABASE_URL)=>{
    try {
        const DB_OPTIONS={
            dbName:"belog", 
        };
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Connected sucessfully");     
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;