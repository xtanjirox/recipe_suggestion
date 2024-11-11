import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed, Heart, ShoppingBasket, LogIn } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => `
    flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
    ${isActive(path) 
      ? 'bg-blue-100 text-blue-800' 
      : 'text-gray-600 hover:bg-gray-100'}
  `;

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <UtensilsCrossed />
            <span>RecipeFinder</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link to="/" className={linkClass('/')}>
              <UtensilsCrossed size={20} />
              <span className="hidden sm:inline">Recipes</span>
            </Link>
            
            {user ? (
              <>
                <Link to="/favorites" className={linkClass('/favorites')}>
                  <Heart size={20} />
                  <span className="hidden sm:inline">Favorites</span>
                </Link>
                <Link to="/shopping-list" className={linkClass('/shopping-list')}>
                  <ShoppingBasket size={20} />
                  <span className="hidden sm:inline">Shopping List</span>
                </Link>
              </>
            ) : (
              <Link to="/auth" className={linkClass('/auth')}>
                <LogIn size={20} />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};