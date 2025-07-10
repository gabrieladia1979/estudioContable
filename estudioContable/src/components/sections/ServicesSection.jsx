// src/components/sections/ServicesSection.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
// Actualiza la importación para que apunte al nuevo archivo .jsx
import { servicesData } from '../../data/servicesData.jsx'; 

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-gray-800">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 mt-3">Soluciones integrales a la medida de tus necesidades.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;