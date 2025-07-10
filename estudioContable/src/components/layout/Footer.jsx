// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <img src="https://estudiocontableroldan.com.ar/wp-content/uploads/2023/07/logo-estudio-fernando-roldan.png" alt="Logo Estudio Contable" className="h-10 opacity-80" />
        </div>
        
        {/* Copyright */}
        <div className="text-center mb-6 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Estudio Contable. Todos los derechos reservados.</p>
        </div>
        
        {/* Contacto Rápido */}
        <div className="text-center">
          <a href="https://wa.me/TUNUMERODEWHATSAPP" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <i className="fab fa-whatsapp mr-2"></i>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;