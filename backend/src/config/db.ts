


import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URI as string);
        console.log("MongoDB connected succesfully" );
    } catch (error) {
        console.log("Error connecting to MongoDB" , error);
        process.exit(1);
    }
};

export default connectDB ;