// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;