import React from 'react';

const CustomButton = ({ text, cvUrl }) => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Hanif_Sikder_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
    data-aos="zoom-in"
      onClick={handleDownload}
      className="relative bg-emerald-500 inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-medium text-white border border-emerald-600 rounded-full group hover:text-white transition-all duration-300"
    >
      {/* Hover background effect */}
      <span className="absolute left-0 top-0 h-0 w-full bg-emerald-600 opacity-100 group-hover:h-full group-hover:top-0 transition-all duration-300 ease-in-out"></span>

      {/* Text layer */}
      <span className="relative z-10 cursor-pointer">{text}</span>
    </button>
  );
};

export default CustomButton;