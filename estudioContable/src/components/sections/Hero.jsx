// src/components/sections/Hero.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const slides = [
    {
      title: "SERVICIO PROFESIONAL",
      subtitle: "ESTUDIO CONTABLE",
      description: "Impuestos - Auditoría y Contabilidad - Sueldos y Cargas Sociales",
      backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "¿POR QUÉ ELEGIRNOS?",
      subtitle: "PROFESIONALISMO",
      description: "Brindamos soluciones impositivas y contables con profesionalismo, responsabilidad y alta dedicación hacia el cliente.",
      backgroundImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
    },
    {
      title: "SOLUCIONES A MEDIDA",
      subtitle: "EXPERIENCIA",
      description: "Utilizamos las técnicas profesionales impositivas y contables con alta calidad, adaptándolas a las necesidades particulares de cada cliente.",
      backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    }
  ];

  return (
    <section className="relative">
      <div className="hero-carousel">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <div className="relative h-[80vh] overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${slide.backgroundImage})`,
                    filter: 'brightness(0.4)'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                      <p className="text-white text-lg md:text-xl mb-4 tracking-wider animate-fade-in-up">
                        {slide.title}
                      </p>
                      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up-delay">
                        {slide.subtitle}
                      </h1>
                      <div className="w-20 h-1 bg-red-500 mb-6 animate-fade-in-up-delay"></div>
                      <p className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-2xl animate-fade-in-up-delay">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
                        <a
                          href="/contacto"
                          className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 transition-all duration-300 text-lg tracking-wide"
                        >
                          CONTACTAR AHORA
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Bottom section with tagline */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Brindamos soluciones impositivas y contables con profesionalismo, 
            responsabilidad y alta dedicación hacia el cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;