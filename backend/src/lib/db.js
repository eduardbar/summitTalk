import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    // Allow the app to continue running even if DB fails, for frontend demo purposes
    // process.exit(1); // Removed to prevent crash
  }
};

