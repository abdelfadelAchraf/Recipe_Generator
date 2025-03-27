import { Request, Response } from "express";
import { generateRecipes } from "../services/recipeGenerator";


const handleRecipeGeneration = async (req: Request, res: Response): Promise<void> => {
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

export default handleRecipeGeneration ;