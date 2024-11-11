import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, ChefHat, Heart, ArrowLeft, ListOrdered } from 'lucide-react';
// import { recipes } from '../data/recipes';
import { useAuthStore } from '../store/authStore';
import { Recipe } from '../types';
import axios from 'axios';

export const RecipeDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  // const recipe = recipes.find(r => r.id === Number(id));
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/recipes/get_recipes/${id}`);
        setRecipe(response.data.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);
  
  if (!recipe) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Recipe not found</p>
      </div>
    );
  }

  const isFavorite = user?.favorites?.includes(recipe.id) || false;

  const handleFavorite = () => {
    // Implement favorite toggle logic
    console.log('Toggle favorite:', recipe.id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back to recipes</span>
      </button>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-[400px] object-cover"
        />

        <div className="p-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{recipe.title}</h1>
            {user && (
              <button
                onClick={handleFavorite}
                className="text-rose-500 hover:scale-110 transition-transform"
              >
                <Heart className={isFavorite ? "fill-current" : ""} size={24} />
              </button>
            )}
          </div>

          <p className="text-gray-600 mt-4">{recipe.description}</p>

          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={20} />
              <span>{recipe.cookingTime} minutes</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ChefHat size={20} />
              <span className="capitalize">{recipe.difficulty}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ListOrdered size={20} className="text-blue-600" />
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ChefHat size={20} className="text-blue-600" />
                Cooking Steps
              </h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-gray-600"
                  >
                    <span className="font-semibold text-blue-600 shrink-0">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {user && (
            <button
              onClick={() => {/* Implement add to shopping list logic */}}
              className="mt-8 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
            >
              Add ingredients to shopping list
            </button>
          )}
        </div>
      </div>
    </div>
  );
};