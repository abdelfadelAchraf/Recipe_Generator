import express from "express";
import handleRecipeGeneration from "../controllers/HandleRecipeGen";


const recipeRouter = express.Router();

recipeRouter.post('/generate-recipes', handleRecipeGeneration);


export default recipeRouter;