// client/src/components/landing/ServicesSection.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

// Importa los íconos que necesites de react-icons
import { FaCalculator, FaUsers, FaChartLine } from 'react-icons/fa'; 

const servicesData = [
  {
    icon: FaCalculator,
    title: 'Asesoramiento Impositivo',
    description: 'Planificación fiscal y liquidación de impuestos nacionales, provinciales y municipales.'
  },
  {
    icon: FaUsers,
    title: 'Liquidación de Sueldos',
    description: 'Gestión completa de la nómina de tu personal, cargas sociales y obligaciones laborales.'
  },
  {
    icon: FaChartLine,
    title: 'Contabilidad y Balances',
    description: 'Elaboración de estados contables, análisis de resultados y reportes de gestión.'
  },
  // ... agrega más servicios aquí
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Merriweather'] text-green-800">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 mt-2">Soluciones a la medida de tus necesidades.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              IconComponent={service.icon}
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