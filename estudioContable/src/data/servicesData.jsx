// src/data/servicesData.jsx
import React from 'react';
import { FaCalculator, FaBuilding, FaUserFriends, FaHandHoldingUsd, FaStore, FaMoneyBillWave } from 'react-icons/fa';

export const servicesData = [
  {
    id: 'tributario',
    icon: <FaHandHoldingUsd />,
    title: 'Asesoramiento Tributario',
    description: 'Ganancias, bienes, IVA, ingresos brutos.'
  },
  {
    id: 'contabilidad',
    icon: <FaCalculator />,
    title: 'Contabilidad y Balances',
    description: 'Auditoría y servicios contables para empresas.'
  },
  {
    id: 'sueldos',
    icon: <FaMoneyBillWave />,
    title: 'Sueldos',
    description: 'Liquidación de sueldos y cargas sociales.'
  },
  {
    id: 'sociedades',
    icon: <FaBuilding />,
    title: 'Empresas y Sociedades',
    description: 'Asesoramiento integral a empresas grandes y medianas.'
  },
  {
    id: 'pymes',
    icon: <FaStore />,
    title: 'Pymes',
    description: 'Asesoramiento integral a empresas pequeñas y familiares.'
  },
  {
    id: 'personas',
    icon: <FaUserFriends />,
    title: 'Personas',
    description: 'Físicas, Autónomos, Ganancias y Bienes Personales.'
  }
];