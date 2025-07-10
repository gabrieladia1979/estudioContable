// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up or at top
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    { to: '/', label: 'INICIO' },
    { to: '/estudio', label: 'ESTUDIO' },
    { to: '/servicios', label: 'SERVICIOS' },
    { to: '/contacto', label: 'CONTACTO' },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <i className="fa fa-phone mr-2"></i>
              +54 9 11 6800 7249
            </span>
            <span className="flex items-center">
              <i className="fa fa-envelope mr-2"></i>
              info@estudio-roldan.com.ar
            </span>
          </div>
          <div className="hidden md:block">
            <span>Lunes a viernes de 9:30 a 18:00 hs</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-bold text-lg leading-tight">ESTUDIO CONTABLE</span>
                  <span className="text-gray-600 text-xs">DR. FERNANDO J. ROLDÁN</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-semibold text-sm tracking-wide transition-colors duration-300 ${
                    isActiveLink(link.to)
                      ? 'text-red-500 border-b-2 border-red-500 pb-1'
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/5491168007249"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105"
              >
                Whatsapp
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-semibold text-sm tracking-wide transition-colors duration-300 ${
                      isActiveLink(link.to)
                        ? 'text-red-500'
                        : 'text-gray-700 hover:text-red-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/5491168007249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full text-sm text-center transition-colors duration-300 w-fit"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;