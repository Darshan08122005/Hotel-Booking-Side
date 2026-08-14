import dns from "dns";
import mongoose from "mongoose";

// Use Google DNS because the default Node DNS resolver is 127.0.0.1
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    console.log("MongoDB URI exists:", !!process.env.MONGODB_URI);

    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      retryWrites: true,
      family: 4,
    });

  } catch (error) {
    console.error("Failed to connect to MongoDB:");
    console.error(error);
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error reason:", error.reason);

    process.exit(1);
  }
};

export default connectDB;