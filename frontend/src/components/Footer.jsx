import React from 'react';

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Vape Elegance</h1>
      <div>
        <Link className="mx-2" to="/">Inicio</Link>
        <Link className="mx-2" to="/products">Productos</Link>
        <Link className="mx-2" to="/about">Sobre</Link>
        <Link className="mx-2" to="/contact">Contacto</Link>
      </div>
      
    </nav>
    
  );
};

export default Footer;
