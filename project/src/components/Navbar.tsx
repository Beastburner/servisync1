import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-white text-3xl font-bold" style={{maxWidth: '160px'}}>
                ServiSync
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-200 hover:text-white transition-colors">Services</Link>
            <Link to="/about" className="text-gray-200 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link>
            <Link 
              to="/book/1" 
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors mr-2"
            >
              Book Now
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-primary px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Login / Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-gray-200 hover:text-white">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-200 hover:text-white">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-200 hover:text-white">Contact</Link>
            <Link to="/book/1" className="block px-3 py-2 text-gray-200 hover:text-white">Book Now</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-200 hover:text-white">Login / Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
