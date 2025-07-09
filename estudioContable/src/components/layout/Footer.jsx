// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Estudio Contable. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Desarrollado con ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;