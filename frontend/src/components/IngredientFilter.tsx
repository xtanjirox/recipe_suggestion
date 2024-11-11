import React, { KeyboardEvent, useState } from 'react';
import { X } from 'lucide-react';

interface Props {
  selectedIngredients: string[];
  onAddIngredient: (ingredient: string) => void;
  onRemoveIngredient: (ingredient: string) => void;
}

export const IngredientFilter: React.FC<Props> = ({
  selectedIngredients,
  onAddIngredient,
  onRemoveIngredient,
}) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      onAddIngredient(input.trim().toLowerCase());
      setInput('');
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type ingredient and press Enter..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {selectedIngredients.map((ingredient) => (
          <span
            key={ingredient}
            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {ingredient}
            <button
              onClick={() => onRemoveIngredient(ingredient)}
              className="hover:bg-blue-200 rounded-full p-0.5"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};