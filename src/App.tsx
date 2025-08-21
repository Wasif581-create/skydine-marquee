import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Menus from './components/Menus';
import BookUs from './components/BookUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '1',
    menu: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMenuSelection = (menuTitle: string) => {
    setFormData(prevData => ({
      ...prevData,
      menu: menuTitle,
    }));
    document.getElementById('book-us')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Menus formData={formData} onMenuSelect={handleMenuSelection} />
        <BookUs formData={formData} handleInputChange={handleInputChange} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;