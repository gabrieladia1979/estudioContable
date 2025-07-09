// client/src/components/landing/Hero.jsx
import React from 'react';

const Hero = () => {
  // Nota: Deberías añadir una imagen de fondo en tu archivo CSS o con Tailwind.
  // Ejemplo: bg-[url('/path/to/your/hero-image.jpg')] en el div.
  // Asegúrate de poner la imagen en la carpeta `client/public/`.
  
  return (
    <section 
      id="inicio" // ID para el scroll suave desde el Navbar
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-fixed bg-[url('/hero-bg.jpg')]"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Superposición oscura */}
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-['Merriweather'] mb-4 tracking-wide">
          Estudio Contable ABM & Asociados
        </h1>
        <p className="text-lg md:text-xl font-['Montserrat'] mb-8 max-w-2xl mx-auto">
          Asesoramiento integral para potenciar el crecimiento de tu negocio.
        </p>
        <a 
          href="#contacto" // Enlace a la sección de contacto
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Contactanos
        </a>
      </div>
    </section>
  );
};

export default Hero;