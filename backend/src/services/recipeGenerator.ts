// src/services/recipeGenerator.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();


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
    
    const prompt = `Generate one Moroccan recipes in French using some or all of these ingredients : ${ingredients.join(', ')}. 
    Return the response as a JSON array with each recipe object having the following structure:
    {
      "title": "Recipe Name",
      "ingredients": ["ingredient1 with quantity", "ingredient2 with quantity", ...],
      "prepTime": "time in minutes , add the word "mins" in the end,
      "cookTime": "time in minutes add the word "mins" in the end",
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


// In your backend recipeGenerator.ts
export async function getAllRecipes(req: Request, res: Response): Promise<void> {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 }).limit(20);
    res.status(200).json({ success: true, recipes });
  } catch (error: any) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}