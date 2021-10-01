import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'media/logo.png';
import TriggerDarkMode from './TriggerDarkMode';


const Navbar = () => {
  return (
    <nav className='bg-red-400'>
      <ul className='flex w-full justify-between my-3'>
       <li><img src={Logo} alt='Logo' className='h-20 w-20' /></li>
        <li>Tienda</li>
        <li>Servicios</li>
        <li>Administración</li>
        <li>
          <TriggerDarkMode />
        </li>
        <li className='px-3'>
          <Link to='/login'>
            <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
              Iniciar Sesión
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;