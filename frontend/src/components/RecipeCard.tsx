import React from 'react';
import { Heart, Clock, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types';
import { useAuthStore } from '../store/authStore';

interface Props {
  recipe: Recipe;
  onFavorite: (id: number) => void;
  isFavorite: boolean;
}

export const RecipeCard: React.FC<Props> = ({ recipe, onFavorite, isFavorite }) => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className="text-lg font-semibold hover:text-blue-600">{recipe.title}</h3>
          </Link>
          {user && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onFavorite(recipe.id);
              }}
              className="text-rose-500 hover:scale-110 transition-transform"
            >
              <Heart className={isFavorite ? "fill-current" : ""} size={20} />
            </button>
          )}
        </div>
        <p className="text-gray-600 mt-2 line-clamp-2">{recipe.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{recipe.cookingTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat size={16} />
            <span className="capitalize">{recipe.difficulty}</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {ingredient}
            </span>
          ))}
          {recipe.ingredients.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{recipe.ingredients.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};