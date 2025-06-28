import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const DownloadButton = ({ text, location }) => {
  return (
    <ScrollLink
      data-aos="zoom-in"
      to={location}
      className="relative inline-flex items-center justify-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group"
    >
      <span className="absolute left-0 top-0 block h-0 w-full transition-all bg-indigo-600 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease"></span>

      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>

      <span className="relative z-10">{text}</span>
    </ScrollLink>
  );
};

export default DownloadButton;
