import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/hanifsikder921" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hanifsikder920/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://x.com/hanifsikder920" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/hanif.sikder.922" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
            <FaFacebook />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Hanif Sikder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
