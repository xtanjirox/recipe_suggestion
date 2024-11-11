import React, { useState, useEffect } from 'react';
import { Clock, ChefHat } from 'lucide-react';
import { RecipeCard } from '../components/RecipeCard';
import { IngredientFilter } from '../components/IngredientFilter';
import { Recipe } from '../types';
import { useAuthStore } from '../store/authStore';
import axios from 'axios';

export const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [cookingTime, setCookingTime] = useState<number>(120);
  const [difficulty, setDifficulty] = useState<string>('all');
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<{data: Recipe[]}>("http://localhost:8000/api/recipes/get_recipes");
        setRecipes(response.data.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);
  

  const filteredRecipes = recipes.filter(recipe => {
    const matchesIngredients = selectedIngredients.length === 0 || 
      selectedIngredients.every(ing => recipe.ingredients.includes(ing));
    const matchesTime = recipe.cookingTime <= cookingTime;
    const matchesDifficulty = difficulty === 'all' || recipe.difficulty === difficulty;
    return matchesIngredients && matchesTime && matchesDifficulty;
  });

  console.log(filteredRecipes);

  const handleFavorite = (recipeId: number) => {
    // Implement favorite logic with backend
    console.log('Toggle favorite:', recipeId);
  };


  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Find Your Perfect Recipe</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ingredients
            </label>
            <IngredientFilter
              selectedIngredients={selectedIngredients}
              onAddIngredient={(ing) => setSelectedIngredients([...selectedIngredients, ing])}
              onRemoveIngredient={(ing) => 
                setSelectedIngredients(selectedIngredients.filter(i => i !== ing))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Cooking Time: {cookingTime} min
            </label>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-gray-500" />
              <input
                type="range"
                min="15"
                max="180"
                value={cookingTime}
                onChange={(e) => setCookingTime(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty Level
            </label>
            <div className="flex items-center gap-2">
              <ChefHat size={20} className="text-gray-500" />
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onFavorite={handleFavorite}
            isFavorite={user?.favorites?.includes(recipe.id) || false}
          />
        ))}
      </div>
    </div>
  );
};