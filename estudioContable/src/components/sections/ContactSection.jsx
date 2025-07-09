// src/components/sections/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-['Merriweather']">Contacto</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          ¿Tenés alguna consulta? No dudes en escribirnos. Estamos para asesorarte.
        </p>
        <div className="mt-8 bg-gray-700 p-8 rounded-lg inline-block shadow-lg">
          <p className="text-xl font-semibold">
            <i className="fab fa-whatsapp mr-2 text-green-400"></i>
            +54 9 11 1234-5678
          </p>
          <p className="text-xl font-semibold mt-4">
            <i className="far fa-envelope mr-2 text-blue-300"></i>
            consultas@miestudio.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;