// src/components/sections/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-gray-800">Contacto</h2>
          <p className="text-lg text-gray-600 mt-3">Envianos tu consulta y te responderemos a la brevedad.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo Nombre */}
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            {/* Campo Email */}
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            {/* Campo Asunto */}
            <div className="md:col-span-2">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            {/* Campo Mensaje */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
              <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>

            {/* Botón Enviar */}
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-green-700 text-white font-bold py-3 px-10 rounded-md hover:bg-green-800 transition-colors text-lg">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;