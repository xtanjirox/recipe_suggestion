import React from 'react';
import { useAuthStore } from '../store/authStore';
import { recipes } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';

export const Favorites: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  
  const favoriteRecipes = recipes.filter(recipe => 
    user?.favorites.includes(recipe.id)
  );

  const handleFavorite = (recipeId: number) => {
    // Implement favorite toggle logic
    console.log('Toggle favorite:', recipeId);
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please sign in to access your favorites.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Favorite Recipes</h2>
      
      {favoriteRecipes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600">You haven't added any favorites yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onFavorite={handleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};