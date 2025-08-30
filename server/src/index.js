import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipeRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",   
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/auth", userRouter);
app.use("/recipe", recipeRouter);

mongoose.connect(
  "mongodb+srv://jerlinfringsha12:Nriet3EHs4V01onC@cluster0.t45lgp9.mongodb.net/RecipeApp?retryWrites=true&w=majority&appName=Cluster0"
);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
