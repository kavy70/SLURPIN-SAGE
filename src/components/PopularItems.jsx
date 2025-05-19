import React, { useState, useEffect } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartPopup from "./CartPopup";
import "./PopularItems.css";

const PopularItems = () => {
  const [popularItems, setPopularItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPopularItems = async () => {
      setLoading(true);
      try {
        // Fetch popular items - in a real app, you might have a "featured" flag
        // or use analytics to determine popular items
        const itemsRef = collection(db, "items");
        const q = query(itemsRef, limit(4)); // Limit to 4 items
        const querySnapshot = await getDocs(q);
        
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setPopularItems(items);
      } catch (error) {
        console.error("Error fetching popular items:", error);
        // Fallback data in case Firebase fetch fails
        setPopularItems([
          {
            id: "1",
            name: "Green Goddess",
            ingredients: "Spinach, kale, banana, mango, and chia seeds",
            price: 7.99,
            image: "greensmoothie.jpg",
            tag: "BESTSELLER"
          },
          {
            id: "2",
            name: "Berry Blast",
            ingredients: "Strawberry, blueberry, raspberry, yogurt, and honey",
            price: 8.49,
            image: "berry.jpg",
          },
          {
            id: "3",
            name: "Tropical Paradise",
            ingredients: "Pineapple, mango, coconut milk, and banana",
            price: 7.99,
            image: "tropical.jpg",
          },
          {
            id: "4",
            name: "Protein Power",
            ingredients: "Almond milk, banana, peanut butter, and protein powder",
            price: 8.99,
            image: "protein.jpg",
            tag: "NEW"
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularItems();
    
    // Add scroll animation for items
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-item');
        }
      });
    }, { threshold: 0.1 });
    
    setTimeout(() => {
      const itemCards = document.querySelectorAll('.popular-item-card');
      itemCards.forEach(card => {
        observer.observe(card);
      });
    }, 100);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(item);
    setSelectedItem(item);
    setShowCartPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowCartPopup(false);
    setSelectedItem(null);
  };
  
  const handleViewMenu = () => {
    navigate('/menu');
  };

  if (loading) {
    return <div className="popular-loading">Loading popular items...</div>;
  }

  return (
    <section className="popular-items-section">
      <div className="popular-items-header">
        <h2 className="animated-title">Our Popular Smoothies</h2>
        <p className="animated-subtitle">Discover our most loved blends that keep our customers coming back for more.</p>
      </div>

      <div className="popular-items-grid">
        {popularItems.map((item, index) => (
          <div 
            className="popular-item-card fade-in" 
            key={item.id}
            onClick={() => navigate(`/item/${item.id}`)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.tag && <span className={`item-tag ${item.tag.toLowerCase()}`}>{item.tag}</span>}
            <div className="item-image">
              <img 
                src={`/${item.image || "greensmoothie.jpg"}`} 
                alt={item.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/greensmoothie.jpg";
                }}
              />
            </div>
            <h3>{item.name}</h3>
            <p className="item-ingredients">{item.ingredients}</p>
            <div className="item-footer">
              <span className="item-price">₹{item.price.toFixed(2)}</span>
              <button 
                className="add-to-cart-btn"
                onClick={(e) => handleAddToCart(e, item)}
              >
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <button className="view-all-btn hover-effect" onClick={handleViewMenu}>
          View Full Menu
        </button>
      </div>

      {showCartPopup && selectedItem && (
        <CartPopup 
          item={selectedItem} 
          onClose={handleClosePopup} 
        />
      )}
    </section>
  );
};

export default PopularItems; 