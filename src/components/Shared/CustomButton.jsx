import React from 'react';
import { Link } from 'react-router'; // ✅ Correct import

const CustomButton = ({ text, location }) => {
  return (
    <Link
      to={location}
      className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-medium text-emerald-600 border border-emerald-600 rounded-full group hover:text-white transition-all duration-300"
    >
      {/* Hover background effect */}
      <span className="absolute left-0 top-0 h-0 w-full bg-emerald-600 opacity-100 group-hover:h-full group-hover:top-0 transition-all duration-300 ease-in-out"></span>

      {/* Text layer */}
      <span className="relative z-10">{text}</span>
    </Link>
  );
};

export default CustomButton;
