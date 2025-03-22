// src/services/api.ts
import { GenerateRecipesRequest, GenerateRecipesResponse, Recipe } from '../types/Recipe';

const API_URL = 'http://localhost:5000/api';

export const recipeService = {
  generateRecipes: async (ingredients: string[]): Promise<Recipe[]> => {
    const response = await fetch(`${API_URL}/generate-recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate recipes');
    }

    const data: GenerateRecipesResponse = await response.json();
    return data.recipes;
  },
};