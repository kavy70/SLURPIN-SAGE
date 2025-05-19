// src/pages/ItemDetailPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartPopup from "../components/CartPopup";
import itemDetails from "../data/itemDetails";
import "./ItemDetailPage.css";

export default function ItemDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [showCartPopup, setShowCartPopup] = useState(false);
  const item = itemDetails.find((i) => i.id === id);

  if (!item) {
    return <div className="not-found">Item not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(item);
    setShowCartPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowCartPopup(false);
  };

  return (
    <div className="item-detail-container">
      <h1 className="item-title">{item.name}</h1>
      <p className="item-ingredients">{item.ingredients}</p>

      <div className="item-image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="item-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/greensmoothie.jpg";
          }}
        />
      </div>

      <p className="nutrition-heading">
        Here's the detailed nutritional breakdown of your {item.name}, including
        how it contributes to daily nutrient needs:
      </p>

      <table className="nutrition-table">
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Amount<br />per Serving</th>
            <th>Daily Requirement<br />(Approx.)</th>
            <th>% of Daily<br />Requirement</th>
          </tr>
        </thead>
        <tbody>
          {item.nutrition.map((nutrient, index) => (
            <tr key={index}>
              <td>{nutrient.name}</td>
              <td>{nutrient.amount}</td>
              <td>{nutrient.daily}</td>
              <td>{nutrient.percent}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="key-insights">
        <h2>Key Insights:</h2>
        <ul>
          {item.insights.map((point, index) => (
            <li key={index}>✅ {point}</li>
          ))}
        </ul>
      </div>

      <div className="add-to-cart-container">
        <div className="price-display">Price: ₹{item.price || 150}</div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      
      {showCartPopup && (
        <CartPopup item={item} onClose={handleClosePopup} />
      )}
    </div>
  );
}
