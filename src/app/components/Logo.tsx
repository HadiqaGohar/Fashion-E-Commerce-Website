import React from 'react';
import { FaSquarespace } from 'react-icons/fa';


function Logo() {
  return (
    <div className="flex items-center space-x-4 p-4 md:space-x-2 md:p-4 hover:scale-105 transition-transform duration-300">
      {/* Icon Cart */}
      <div className="text-teal-500 text-3xl sm:text-2xl" aria-label="Shopping Cart Icon">
              <FaSquarespace size={40} />
            </div>
      {/* Logo */}
      <div>
        <h1 className="font-black font-sans  text-2xl md:text-2xl sm:text-lg">
          HG. 
        </h1>
        <p className="font-normal text-black text-sm md:text-xs">
          {/* Shopping */}
        </p>
      </div>
    </div>
  );
}

export default Logo;
