import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const cnn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${cnn.connection.host}`);
    } catch (error) {
        console.log(`Error :${error.message}`);
        process.exit(1)//1-means failed ,0-means successful
    }
}