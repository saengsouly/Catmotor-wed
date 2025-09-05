
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CarIcon } from './IconComponents';
import { STORE_INFO } from '../constants';


const Header: React.FC = () => {
  return (
    <header className="bg-brand-blue text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-brand-gold hover:opacity-90 transition-opacity">
            <CarIcon className="w-8 h-8"/>
            <h1>{STORE_INFO.name}</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg font-medium transition-colors ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/cars" 
              className={({ isActive }) => 
                `text-lg font-medium transition-colors ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`
              }
            >
              All Cars
            </NavLink>
          </nav>
          <a href={`tel:${STORE_INFO.phone}`} className="hidden md:block bg-brand-gold text-brand-blue font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
