import React from 'react';
import cssIcon from '../../../assets/icons/cssIcon.svg';
import firebaseIcon from '../../../assets/icons/firebaseIcon.svg';
import htmlIcon from '../../../assets/icons/htmlIcon.svg';
import javascriptIcon from '../../../assets/icons/javascriptIcon.svg';
import mongodbIcon from '../../../assets/icons/mongodbIcon.svg';
import nodejsIcon from '../../../assets/icons/nodejsIcon.svg';
import reactIcon from '../../../assets/icons/reactIcon.svg';
import tailwindIcon from '../../../assets/icons/tailwindIcon.svg';
import { motion } from 'framer-motion';

const icons = [
  cssIcon,
  firebaseIcon,
  reactIcon,
  javascriptIcon,
  mongodbIcon,
  htmlIcon,
  nodejsIcon,
  tailwindIcon,
];

const Framework = () => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap justify-between gap-10">
        {icons.map((icon, index) => (
          <motion.img
            key={index}
            src={icon}
            alt={`tech-icon-${index}`}
            className="md:w-20  md:h-20 w-10"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              delay: index * 0.2, // wave effect
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Framework;
