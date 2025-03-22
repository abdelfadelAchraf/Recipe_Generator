// src/components/RecipeGenerator.tsx
import { useState } from 'react';
import { Recipe } from '../types/Recipe';
import { recipeService } from '../services/api';

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse ingredients
    const ingredientsList = ingredients
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);
    
    if (ingredientsList.length === 0) {
      setError('Please enter at least one ingredient');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const generatedRecipes = await recipeService.generateRecipes(ingredientsList);
      setRecipes(generatedRecipes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Generator</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="ingredients" className="block mb-2">
            Enter ingredients (comma separated):
          </label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="chicken, rice, tomatoes"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Generating...' : 'Generate Recipes'}
        </button>
      </form>
      
      {error && (
        <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {recipes.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Generated Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div key={recipe._id} className="border rounded p-4 shadow-sm">
                <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
                
                <div className="mb-3">
                  <p className="text-sm text-gray-600">
                    Prep: {recipe.prepTime} | Cook: {recipe.cookTime} | Serves: {recipe.servings}
                  </p>
                </div>
                
                <div className="mb-3">
                  <h4 className="font-medium mb-1">Ingredients:</h4>
                  <ul className="list-disc pl-5">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="text-sm">{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Steps:</h4>
                  <ol className="list-decimal pl-5">
                    {recipe.steps.map((step, i) => (
                      <li key={i} className="text-sm mb-1">{step}</li>
                    ))}
                  </ol>
                </div>
                
                {recipe.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {recipe.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;