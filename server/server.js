import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkwebhook from "./controllers/clerkWebhooks.js";


connectDB()

const app = express()
app.use(cors()) 


// Moddieware
app.use(express.json())
app.use(clerkMiddleware())

// API to listen to Clerk webhooks
app.post("/api/clerk", clerkwebhook);

app.get('/', (req, res)=> res.send("API is Working"))

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));