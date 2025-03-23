// // src/index.ts
// import express from "express";
// import { handleRecipeGeneration } from "./services/recipeGenerator";
// import dotenv from "dotenv";


// dotenv.config();

// const app = express();

// // Middleware

// app.use(express.json());

// // Routes
// app.post('/api/generate-recipes', handleRecipeGeneration);

// // Health check route
// app.get('/api/health', (req, res) => {
//   res.status(200).json({ status: 'ok' });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// src/index.ts
import express from "express";
import { getAllRecipes, handleRecipeGeneration } from "./services/recipeGenerator";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/generate-recipes', handleRecipeGeneration);
app.get('/api/recipes', getAllRecipes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));