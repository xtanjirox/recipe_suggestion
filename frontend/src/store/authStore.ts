import { create } from 'zustand';
import { User } from '../types';

//interface AuthState {
//  user: User | null;
//  setUser: (user: User | null) => void;
//}

//export const useAuthStore = create<AuthState>((set) => ({
//  user: null,
//  setUser: (user) => set({ user }),
//}));

// Define your AuthState type
interface AuthState {
  user: { id: string; email: string; favorites: number[] } | null;
  setUser: (user: { id: string; email: string; favorites: number[] } | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),  // Check localStorage on initial load
  setUser: (user) => {
    set({ user });
    if (user) {
      // Persist user to localStorage when the user is set
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      // If user is null (logout), remove from localStorage
      localStorage.removeItem('user');
    }
  },
}));
