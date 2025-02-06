import dotenv from "dotenv";
dotenv.config({ path: './src/.env' });
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://mido:mido313@recipes.m7ucp.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes")

app.listen(3001, () => {console.log("SERVER STARTED!")});