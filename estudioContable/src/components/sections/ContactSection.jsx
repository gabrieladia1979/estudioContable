// src/components/sections/ContactSection.jsx
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario.
    // Por ejemplo, usando 'fetch' a un backend o un servicio como EmailJS.
    console.log('Formulario a enviar:', formData);
    alert('Gracias por tu consulta. Nos pondremos en contacto a la brevedad.');
    
    // Limpiar el formulario
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* ... Encabezado de la sección ... */}
        
        <div className="max-w-4xl mx-auto">
          {/* Añadimos el handler onSubmit al formulario */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Campo Nombre */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            {/* ... Resto de los campos (subject, message) con 'value' y 'onChange' similares ... */}
            
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