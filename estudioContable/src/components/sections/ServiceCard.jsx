// client/src/components/landing/ServiceCard.jsx
import React from 'react';

// 'IconComponent' es el componente del ícono que pasarás como prop.
const ServiceCard = ({ IconComponent, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-green-100 text-green-700">
        <IconComponent size={32} />
      </div>
      <h3 className="text-xl font-bold font-['Merriweather'] text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 font-['Montserrat']">{description}</p>
    </div>
  );
};

export default ServiceCard;