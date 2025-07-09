// src/pages/ServiciosPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ServicesSection from '../components/sections/ServicesSection';
import Footer from '../components/layout/Footer';

const ServiciosPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-24">
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                NUESTROS SERVICIOS
              </h1>
              <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos soluciones integrales en materia contable, tributaria y de recursos humanos
              </p>
            </div>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiciosPage;
