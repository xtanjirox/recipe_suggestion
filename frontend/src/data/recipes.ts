import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Mushroom Pasta",
    description: "A delicious vegetarian pasta dish with creamy mushroom sauce",
    ingredients: ["pasta", "mushrooms", "cream", "garlic", "parmesan"],
    steps: [
      "Boil pasta according to package instructions",
      "Sauté sliced mushrooms and minced garlic until golden",
      "Add cream and simmer until sauce thickens",
      "Toss pasta with the mushroom sauce",
      "Finish with grated parmesan and black pepper"
    ],
    cookingTime: 30,
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Grilled Salmon with Asparagus",
    description: "Healthy and flavorful grilled salmon served with fresh asparagus",
    ingredients: ["salmon", "asparagus", "lemon", "olive oil", "garlic"],
    steps: [
      "Marinate salmon with olive oil, lemon juice, and garlic",
      "Preheat grill to medium-high heat",
      "Grill salmon for 4-5 minutes per side",
      "Toss asparagus with olive oil and grill for 3-4 minutes",
      "Serve with lemon wedges"
    ],
    cookingTime: 25,
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Classic Margherita Pizza",
    description: "Traditional Italian pizza with fresh basil and mozzarella",
    ingredients: ["pizza dough", "tomatoes", "mozzarella", "basil", "olive oil"],
    steps: [
      "Preheat oven to 450°F with pizza stone",
      "Roll out pizza dough on floured surface",
      "Top with crushed tomatoes, torn mozzarella, and basil",
      "Drizzle with olive oil",
      "Bake for 12-15 minutes until crust is golden"
    ],
    cookingTime: 45,
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Chocolate Chip Cookies",
    description: "Soft and chewy chocolate chip cookies that melt in your mouth",
    ingredients: ["flour", "butter", "chocolate chips", "sugar", "eggs"],
    steps: [
      "Cream butter and sugars until light and fluffy",
      "Beat in eggs and vanilla",
      "Mix in dry ingredients until just combined",
      "Fold in chocolate chips",
      "Bake at 375°F for 10-12 minutes"
    ],
    cookingTime: 20,
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Spicy Thai Curry",
    description: "Aromatic and spicy Thai curry with coconut milk",
    ingredients: ["coconut milk", "curry paste", "chicken", "bamboo shoots", "rice"],
    steps: [
      "Cook rice according to package instructions",
      "Heat curry paste in a large pan until fragrant",
      "Add coconut milk and bring to simmer",
      "Add chicken and cook until done",
      "Stir in bamboo shoots and serve over rice"
    ],
    cookingTime: 40,
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Fresh Garden Salad",
    description: "Light and refreshing salad with seasonal vegetables",
    ingredients: ["lettuce", "tomatoes", "cucumber", "avocado", "olive oil"],
    steps: [
      "Wash and chop all vegetables",
      "Tear lettuce into bite-sized pieces",
      "Combine vegetables in a large bowl",
      "Drizzle with olive oil and vinegar",
      "Season with salt and pepper to taste"
    ],
    cookingTime: 15,
    difficulty: "easy",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
  }
];