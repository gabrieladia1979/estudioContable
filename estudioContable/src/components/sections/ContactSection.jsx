// client/src/components/landing/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    // (ej. a un servicio como Formspree, o a un endpoint de tu backend si lo creas)
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto a la brevedad.');
    setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input type="text" name="name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} required
               className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Tu Email" value={formData.email} onChange={handleChange} required
               className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <textarea name="message" placeholder="Tu Mensaje" value={formData.message} onChange={handleChange} required rows="5"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
      </div>
      <button type="submit" 
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300">
        Enviar Mensaje
      </button>
    </form>
  );
};

export default ContactForm;