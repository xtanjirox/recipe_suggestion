export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  cookingTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl: string;
}

export interface User {
  id: string;
  email: string;
  favorites: number[];
}

export interface ShoppingListItem {
  id: string;
  userId: string;
  item: string;
  completed: boolean;
}