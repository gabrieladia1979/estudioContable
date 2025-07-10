// src/pages/ServiciosPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ServiciosPage = () => {
  const servicios = [
    {
      title: "Asesoramiento Tributario",
      items: [
        "Asesoramiento impositivo para empresas y sociedades",
        "Liquidación de impuestos: ganancias, bienes personales, IVA, ingresos brutos, convenio multilateral",
        "Presentación de regímenes de información",
        "Planeamiento Fiscal",
        "Atención de inspecciones impositivas AFIP, AGIP, ARBA",
        "Contestación de intimaciones, requerimientos, verificaciones",
        "Planes de facilidades de pago y moratorias",
        "Relevamiento de situación tributaria y confección de plan de regularización",
        "Comunicación permanente de novedades tributarias pertinentes a cada cliente"
      ]
    },
    {
      title: "Contabilidad y Balances",
      items: [
        "Asesoramiento contable para empresas y sociedades",
        "Elaboración de estados contables (balances)",
        "Auditoría de estados contables de acuerdo con normas profesionales",
        "Outsourcing contable",
        "Evaluación de procedimientos contables y administrativos",
        "Asesoramiento para la implementación de nuevos sistemas contables",
        "Emisión de informes y certificaciones"
      ]
    },
    {
      title: "Empresas y Sociedades",
      subtitle: "Contamos con los equipos y profesionales para asesorar a tu empresa. Armamos un plan de trabajo a medida según las necesidades del cliente, proveyendo personal en el cliente de ser necesario.",
      items: [
        "Constitución de sociedades",
        "Reformas estatutarias",
        "Designación y renuncia de administradores",
        "Cambio de jurisdicción",
        "Cambio de sede social",
        "Reorganización de sociedades: transformación, fusión escisión"
      ]
    },
    {
      title: "Pymes",
      subtitle: "Si tenés una empresa pequeña o familiar podemos ayudarte a ordenar procesos y lograr una mejor gestión administrativo-contable, tributaria y laboral.",
      items: [
        "Tercerización contable",
        "Consultoría pymes",
        "Consultoría administrativo contable",
        "Confección de reportes de gestión a medida"
      ]
    },
    {
      title: "Sueldos",
      items: [
        "Liquidación de sueldos y cargas sociales",
        "Liquidación de cargas sindicales",
        "Certificaciones de servicios y remuneraciones",
        "Libros de sueldos y jornales",
        "Selección de personal"
      ]
    },
    {
      title: "Personas",
      items: [
        "Responsables Inscriptos",
        "Autónomos",
        "Ganancias y Bienes Personales",
        "Monotributistas",
        "Certificaciones de Ingresos y origen de fondos"
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
                NUESTROS SERVICIOS
              </h1>
              <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
                Ofrecemos soluciones integrales en materia contable, tributaria y de recursos humanos
              </p>
            </div>
          </div>
        </div>

        {/* Services Detail Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-playfair text-gray-800 mb-4">SERVICIOS PROFESIONALES</h2>
              <p className="text-lg text-gray-600 font-inter max-w-4xl mx-auto">
                Brindamos soluciones impositivas y contables con profesionalismo, responsabilidad y alta dedicación hacia el cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {servicios.map((servicio, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold font-playfair text-gray-800 mb-4">
                    {servicio.title}
                  </h3>
                  {servicio.subtitle && (
                    <p className="text-gray-600 font-inter mb-6 italic">
                      {servicio.subtitle}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {servicio.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span className="text-gray-700 font-inter">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">¿Necesita asesoramiento profesional?</h2>
            <p className="text-xl font-inter mb-8 max-w-2xl mx-auto">
              Contactarnos es el primer paso hacia un servicio mejor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5491168007249"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 font-inter"
              >
                LLAMAR
              </a>
              <a
                href="https://wa.me/5491168007249"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 font-inter"
              >
                WHATSAPP
              </a>
              <a
                href="mailto:info@estudio-roldan.com.ar"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 font-inter"
              >
                EMAIL
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiciosPage;
