import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CartButton from './CartButton';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleOrderClick = () => {
    navigate('/menu');
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <h1 className="logo">SLURPIN'SAGE</h1>
      </div>

      <div className="nav-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>  
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        <li className="cart-icon">
          <CartButton />
        </li>
      </ul>

      {location.pathname !== '/menu' && (
        <button className="order-button" onClick={handleOrderClick}>Order Now</button>
      )}
    </nav>
  );
}

export default Navbar;
