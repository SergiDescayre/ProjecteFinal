import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo_ligth.png';
import login from '../assets/login.svg';
import menu from "../assets/menu.svg"
import {useSelector} from "react-redux"

// Componente de la barra de navegación

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 lg:justify-center lg:w-auto">
          <img className="h-[60px] hidden md:block " src={logo} alt="Logo" />
        </div>

        {/* Icono de hamburguesa (solo visible en dispositivos móviles) */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 "
          >
           <img src={menu} alt="menu" />
          </button>
        </div>

        {/* Menús (centrados en dispositivos grandes, ocultos en dispositivos pequeños) */}
        <div className="hidden md:flex flex-grow justify-center">
          <NavLink to="/" className="text-orange-200 px-4 py-2">Inicio</NavLink>
          <NavLink to="/festivales" className="text-orange-200 px-4 py-2">Festivales</NavLink>
          <a href="#" className="text-orange-200 px-4 py-2">Servicios</a>
          <a href="#" className="text-orange-200 px-4 py-2">Contacto</a>
        </div>

        {/* Icono de login (alineado a la derecha) */}
        <div className="ml-auto">
          <img onClick={handleLogin} src={login} alt="" />
        </div>
      </div>

      {/* Menús desplegables (solo visibles en dispositivos móviles) */}
      <div className={`lg:hidden ${menuOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col items-center">
        <NavLink to="/" className="text-orange-200 px-4 py-2">Inicio</NavLink>
          <NavLink to="/festivales" className="text-orange-200 px-4 py-2">Festivales</NavLink>
          <a href="#" className="text-orange-100 hover:text-orange-200 px-4 py-2">Servicios</a>
          <a href="#" className="text-orange-100 hover:text-orange-200 px-4 py-2">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
