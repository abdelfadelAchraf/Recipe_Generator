import { useEffect, useState } from "react";
import { Recipe } from "../types/Recipe";
import { recipeService } from "../services/api";
import {
  Search,
  Clock,
  ChefHat,
  Users,
  Tag,
  Utensils,
} from "lucide-react";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ingredientsList = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    if (ingredientsList.length === 0) {
      setError("Please enter at least one ingredient");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const generatedRecipes = await recipeService.generateRecipes(
        ingredientsList
      );
      setRecipes(generatedRecipes);
      setIngredients("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/recipes");
        const data = await response.json();
        if (data.success) {
          setRecipes(data.recipes);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-200 text-amber-900">
      <header className="bg-red-500 py-6 text-center text-white shadow-md">
        <ChefHat size={60} className="mx-auto mb-2" />
        <h1 className="text-4xl font-bold">Moroccan Recipe Generator</h1>
        <p className="text-lg mt-2">
          Discover delicious recipes with the ingredients you have on hand
        </p>
      </header>

      <main className="container mx-auto p-6">
        <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-amber-300">
          <h2 className="text-2xl font-semibold flex items-center mb-4">
            <Search className="mr-2" /> Find Recipes by Ingredients
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
              placeholder="Enter ingredients, e.g. couscous, lamb, mint"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              {loading ? "Searching..." : "Generate Recipes"}
            </button>
          </form>
        </section>

        {error && (
          <p className="mt-4 text-center text-red-500 bg-red-100 p-3 rounded">
            {error}
          </p>
        )}

        {recipes.length > 0 && (
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-center flex items-center justify-center">
              <Utensils className="mr-2 text-red-500" /> Discovered Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {recipes.map((recipe) => (
                <div
                  key={recipe._id}
                  className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition border border-amber-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Clock className="mr-1" size={16} /> Prep: {recipe.prepTime} | Cook: {recipe.cookTime}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Users className="mr-1" size={16} /> Servings: {recipe.servings}
                  </p>
                  <h4 className="mt-4 font-semibold">Ingredients:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                  <h4 className="mt-4 font-semibold">Steps:</h4>
                  <ol className="list-decimal list-inside text-gray-700">
                    {recipe.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                  {recipe.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1">
                      {recipe.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-red-200 px-3 py-1 rounded-full text-gray-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="mt-12 py-6 bg-red-500 text-center text-white">
        <p>Explore the rich flavors of Moroccan cuisine with our AI-powered recipe generator</p>
      </footer>
    </div>
  );
};

export default RecipeGenerator;
