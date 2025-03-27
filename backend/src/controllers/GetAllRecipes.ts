import Recipe from "../models/RecipeShema";
import { Request, Response } from "express";



const getAllRecipes = async (req: Request, res: Response):Promise<void> => {
    try {
        const recipes = await Recipe.find().sort({ createdAt: -1 }).limit(20);
        res.status(200).json({ success: true, recipes });
      } catch (error: any) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ success: false, error: error.message });
      }
}

export default getAllRecipes;
