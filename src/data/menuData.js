// src/data/menuData.js
export const menuData = [
  {
    id: "1",
    name: "Green Smoothie",
    image: "/greensmoothie.jpg",
    ingredients: ["Spinach", "Kale", "Banana", "Almond Milk"],
    price: 150,
    nutrition: [
      { name: "Calories", amount: "150 kcal", daily: "2000 kcal", percent: "7.5%" },
      { name: "Protein", amount: "5g", daily: "50g", percent: "10%" },
      { name: "Vitamin C", amount: "60mg", daily: "90mg", percent: "66%" },
    ],
    insights: [
      { title: "Energy Boost", text: "Great for starting your day with natural energy." },
      { title: "Immunity", text: "High in vitamin C for a strong immune system." },
    ]
  },
  // Add more items similarly...
];
