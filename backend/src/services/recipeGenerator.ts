// src/services/recipeGenerator.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();
// Add this near the top of your recipeGenerator.ts file
// dotenv.config();
console.log("MONGODB_URI from env:", process.env.MONGODB_URI);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define Recipe interface
interface IRecipe {
  title: string;
  ingredients: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  steps: string[];
  tags: string[];
  createdAt: Date;
}

// Create Recipe Schema
const recipeSchema = new mongoose.Schema<IRecipe>({
  title: String,
  ingredients: [String],
  prepTime: String,
  cookTime: String,
  servings: Number,
  steps: [String],
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

const Recipe = mongoose.model<IRecipe>('Recipe', recipeSchema);

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateRecipes(ingredients: string[]): Promise<IRecipe[]> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `Generate 2 different Moroccan recipes using some or all of these ingredients : ${ingredients.join(', ')}. 
    Return the response as a JSON array with each recipe object having the following structure:
    {
      "title": "Recipe Name",
      "ingredients": ["ingredient1 with quantity", "ingredient2 with quantity", ...],
      "prepTime": "time in minutes",
      "cookTime": "time in minutes",
      "servings": number,
      "steps": ["step1", "step2", ...],
      "tags": ["tag1", "tag2", ...]
    }`;
    
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    // Extract JSON from the response
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/{[\s\S]*}/);
    let recipesJson;
    
    if (jsonMatch) {
      recipesJson = JSON.parse(jsonMatch[1] || jsonMatch[0]);
    } else {
      throw new Error("Could not parse JSON from the AI response");
    }
    
    // Save recipes to MongoDB
    const savedRecipes = await Recipe.insertMany(recipesJson);
    
    return savedRecipes.map(recipe => recipe.toObject());
  } catch (error) {
    console.error("Error generating recipes:", error);
    throw error;
  }
}

// Express API handler (if using Express)
export async function handleRecipeGeneration(req: Request, res: Response): Promise<void> {
  try {
    const { ingredients } = req.body;
    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      res.status(400).json({ error: "Please provide a non-empty array of ingredients" });
    }
    
    const recipes = await generateRecipes(ingredients);
    res.status(200).json({ success: true, recipes });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}