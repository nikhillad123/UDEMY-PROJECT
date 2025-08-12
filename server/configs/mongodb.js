import mongoose from "mongoose";

const connectDB = async () => {
    // Connection event listeners
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
        console.error("MongoDB connection error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB disconnected");
    });

    // Make sure the URI exists
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in the .env file");
    }

    // Connect to MongoDB with the lms database
    await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
};

export default connectDB;
