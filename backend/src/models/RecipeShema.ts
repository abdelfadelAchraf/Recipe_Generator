import mongoose from "mongoose";

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
  export default  Recipe;