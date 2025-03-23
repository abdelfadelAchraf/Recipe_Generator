// src/components/RecipeGenerator.tsx
import { useEffect, useState } from 'react';
import { Recipe } from '../types/Recipe';
import { recipeService } from '../services/api';

// Import icons
import { 
  Search, 
  Clock, 
  ChefHat ,
  Users, 
  Tag,
  Utensils
} from 'lucide-react';

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
    fetchRecipes();
  };
  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/recipes');
      const data = await response.json();
      if (data.success) {
        setRecipes(data.recipes);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
   

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      {/* Moroccan-style header with pattern */}
      <div className="bg-gradient-to-r from-red-400 to-red-500 py-8 border-b-8 border-emerald-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center">
            <ChefHat  size={80} color='white' className="text-amber-100 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-amber-100 text-center">
              Moroccan Recipe Generator
            </h1>
          </div>
          <p className="text-center text-amber-100 mt-2 max-w-2xl mx-auto">
            Discover delicious recipes with the ingredients you have on hand, inspired by Moroccan flavors
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg border border-amber-200 mb-10">
          <div className="bg-red-400 p-4 text-white">
            <h2 className="font-bold text-xl flex items-center">
              <Search className="mr-2" />
              Find Recipes by Ingredients
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <label htmlFor="ingredients" className="block mb-2 font-medium text-black">
                Enter ingredients (comma separated):
              </label>
              <input
                type="text"
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="w-full p-3 border-2 border-black rounded-md focus:border-black focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                placeholder="couscous, lamb, dates, cinnamon, mint"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full px-4 py-3 bg-green-300 text-white rounded-md hover:bg-green-500 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition-colors font-medium"
            >
              {loading ? 'Searching for recipes...' : 'Generate Recipes'}
            </button>
          </form>
        </div>
        
        {error && (
          <div className="p-4 mb-8 bg-red-100 text-sm font-thin text-red-500 rounded-md border border-red-300 max-w-3xl mx-auto">
            {error}
          </div>
        )}
        
        {recipes.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-amber-800 flex items-center justify-center">
              <Utensils className="mr-2" size={60} color='red' />
              <span className='text-4xl text-black font-bold uppercase bg-gradient-to-r from-red-300 to-white py-4 w-fit px-2'>Discovered Recipes</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <div key={recipe._id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-amber-200 hover:shadow-xl  hover:scale-101 transition-all duration-300">
                  {/* Decorative Moroccan pattern header */}
                  <div className="h-3  bg-black"></div>
                  
                  <div className="p-5">
                    <h3 className="text-2xl font-bold mb-3 text-black uppercase">{recipe.title}</h3>
                    
                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-amber-700">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span className='text-black'>Prep: {recipe.prepTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span className='text-black'>Cook: {recipe.cookTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        <span className='text-black'>Serves: {recipe.servings}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 pb-1 border-b border-amber-200 text-black text-2xl">Ingredients:</h4>
                      <ul className="list-none pl-1">
                        {recipe.ingredients.map((ingredient, i) => (
                          <li key={i} className="text-md mb-1 flex items-start text-black/70">
                            <span className="text-red-500 mr-2">•</span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 pb-1 border-b border-amber-200 text-2xl text-black">Steps:</h4>
                      <ol className="list-decimal pl-5 text-md mb-1 text-black/70">
                        {recipe.steps.map((step, i) => (
                          <li key={i} className="text-sm mb-2">{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    {recipe.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1 items-center">
                        <Tag size={20} className="text-amber-500 mr-1" />
                        {recipe.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-red-300 text-black/60 px-3 py-1.5 rounded-full hover:scale-90 cursor-pointer transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Moroccan-style footer */}
        <div className="mt-16 border-t-2 border-amber-300 pt-6 text-center text-amber-700">
          <p>Explore the rich flavors of Moroccan cuisine with our AI-powered recipe generator</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeGenerator;