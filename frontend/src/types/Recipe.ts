// src/types/Recipe.ts
export interface Recipe {
    _id: string;
    title: string;
    ingredients: string[];
    prepTime: string;
    cookTime: string;
    servings: number;
    steps: string[];
    tags: string[];
    createdAt: Date;
  }
  
  export interface GenerateRecipesRequest {
    ingredients: string[];
  }
  
  export interface GenerateRecipesResponse {
    success: boolean;
    recipes: Recipe[];
  }