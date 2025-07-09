// src/components/layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll'; // Importa Link de react-scroll

const navLinks = [
  { to: 'inicio', label: 'Inicio' },
  { to: 'servicios', label: 'Servicios' },
  { to: 'nosotros', label: 'Nosotros' },
  { to: 'contacto', label: 'Contacto' },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700 font-['Merriweather']">Estudio ABM</h1>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70} // Ajusta el desplazamiento para que el título de la sección no quede tapado por el navbar
              duration={500}
              className="text-gray-600 hover:text-green-700 cursor-pointer transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Aquí podrías agregar un botón para el menú móvil en el futuro */}
      </div>
    </nav>
  );
};

export default Navbar;