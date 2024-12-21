import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = {};

export default async function dbconnect() {
    const dbUrl = process.env.MONGODB_URI;
    if (!dbUrl) {
        console.log("MongoDB URL not valid");
        return;
    }

    if (connection.isConnected) {
        console.log("MongoDB already connected");
        return;
    }

    try {
        const mongoconnect = await mongoose.connect(process.env.MONGODB_URI);
        connection.isConnected = mongoconnect.connections[0].readyState;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Connection failed:", error);
    }
}
