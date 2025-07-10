// src/data/servicesData.js
import { FaCalculator, FaUsers, FaChartLine } from 'react-icons/fa';

export const servicesData = [
  {
    id: 'contabilidad', // Añadimos un ID único
    icon: <FaCalculator />,
    title: 'Impuestos y Contabilidad',
    description: 'Liquidación de impuestos, contabilidad general y preparación de balances para personas y empresas.'
  },
  {
    id: 'laboral', // Añadimos un ID único
    icon: <FaUsers />,
    title: 'Asesoramiento Laboral',
    description: 'Administración de personal, liquidación de sueldos y jornales, y gestión de cargas sociales.'
  },
  {
    id: 'sociedades', // Añadimos un ID único
    icon: <FaChartLine />,
    title: 'Consultoría y Sociedades',
    description: 'Constitución de sociedades, análisis de costos y planificación fiscal estratégica.'
  }
];