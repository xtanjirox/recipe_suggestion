import React, { useState } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';
import { ShoppingListItem } from '../types';
import { useAuthStore } from '../store/authStore';

export const ShoppingList: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim() || !user) return;

    const item: ShoppingListItem = {
      id: Date.now().toString(),
      userId: user.id,
      item: newItem.trim(),
      completed: false,
    };

    setItems([...items, item]);
    setNewItem('');
  };

  const toggleItem = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please sign in to access your shopping list.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Shopping List</h2>

        <form onSubmit={handleAddItem} className="flex gap-2 mb-6">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
          >
            <Plus size={20} />
          </button>
        </form>

        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className={`p-1 rounded-full ${
                  item.completed ? 'bg-green-100 text-green-600' : 'bg-gray-200'
                }`}
              >
                <Check size={16} />
              </button>
              <span className={`flex-1 ${item.completed ? 'line-through text-gray-400' : ''}`}>
                {item.item}
              </span>
              <button
                onClick={() => deleteItem(item.id)}
                className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-center text-gray-500 py-4">
              Your shopping list is empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
};