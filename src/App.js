import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
// import Scroll from './components/Scroll';
import Menu from './components/Menu';
import About from './components/About.jsx';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
// import Newsletter from './components/Newsletter';
import PopularItems from './components/PopularItems';
import ContactForm from './components/ContactForm';
import ItemDetailPage from './pages/ItemDetailPage';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <PopularItems />
                  <WhyChoose />
                  <Testimonials/>
                  {/* <Newsletter /> */}
                </>
              } />
              <Route path="/menu" element={<Menu />} />
              <Route path="/item/:id" element={<ItemDetailPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>       
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
