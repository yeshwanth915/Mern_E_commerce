import React from 'react';
import { assets } from '../assets/assets'; // Ensure assets contains logo

const Navbar = ({ setToken }) => { // ✅ Corrected destructuring
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[80px] sm:w-[10%]' src={assets.logo} alt="Logo" />
      <button 
        onClick={() => setToken('')}
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition'
        aria-label="Logout"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
