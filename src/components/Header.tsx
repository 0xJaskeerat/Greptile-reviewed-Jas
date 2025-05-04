import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Logo from '../assets/Logo.webp'
import { BOOK_CALL } from './constants';

const Header: React.FC = () => {
  const handleBookCall = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(BOOK_CALL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <div className="w-full max-w-10/12 bg-white border border-gray-200 shadow-md rounded-2xl px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Greptile logo" className="w-6 h-6" />
          <span className="text-gray-900 font-semibold text-lg">greptile on J</span>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleBookCall}
          className="ml-4 flex items-center space-x-1 bg-[#D1FADF] text-black font-semibold px-4 py-2 rounded-md border border-green-300 shadow-sm hover:bg-[#bff6c6] transition cursor-pointer"
        >
          <span>Book a Call</span>
          <FiArrowRight className="text-md" />
        </button>
      </div>
    </header>
  );
};

export default Header;
