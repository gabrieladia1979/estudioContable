// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection'; // Deberás crear este componente
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer'; // Deberás crear este componente

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <ServicesSection />
        <AboutSection />
        {/* Aquí podrías agregar la sección "Por qué elegirnos" */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
