// src/data/itemDetails.js
const itemDetails = [
  {
    id: "P8l44xJdPKOOJREh7AKy", // This must match Firebase item ID
    name: "Virgin Pina Colada",
    ingredients: "Fresh pineapple, Freshly made coconut milk, dates, ice",
    image: "/virginpina.jpg",
    nutrition: [
      { name: "Calories", amount: 295.0, daily: 27.9, percent: 14.3 },
      { name: "Carbs (g)", amount: 59.5, daily: 35, percent: 27.5 },
      { name: "Protein (g)", amount: 3.45, daily: 50, percent: 30.2 },
      { name: "Fat (g)", amount: 7.02, daily: 70, percent: 31.3 },
      { name: "Vitamin C (mg)", amount: 59.09, daily: 90, percent: 18 },
      { name: "Iron (mg)", amount: 1.8, daily: 22.6, percent: 59.0 },
    ],
    insights: [
      "High in Fiber: Provides 31.9% of daily fiber needs, great for digestion.",
      "Rich in Vitamin C: Covers over 59% of the daily requirement for men and 70.6% for women, supporting immunity.",
      "Good Energy Source: Provides 14.3% of daily calories, making it a great snack or breakfast option.",
      "Moderate Iron Content: Beneficial, especially for men who need 22.5%.",
    ],
  },
];

export default itemDetails;