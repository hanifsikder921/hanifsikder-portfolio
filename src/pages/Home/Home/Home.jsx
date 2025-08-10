import React from 'react';
import Hero from '../Hero/Hero';
import Framework from '../Framework/Framework';
import MyService from '../Service/MyService';
import MyLatestProject from '../LatestProject/MyLatestProject';
import MyEducation from '../MyEducation/MyEducation';
import PricingTable from '../Pricing/PricingTable';
import ContactForm from '../ContactForm/ContactForm';
import FaqSection from '../FaqSection/FaqSection';
import About from '../../About/About';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import Skill from '../Skill/Skill';

const Home = () => {
  return (
    <div className="mx-auto md:px-2 relative">
      <div className="fixed top-5/12 z-10 hidden md:flex ">
        <div className="flex flex-col shadow-lg p-4 gap-6 rounded-full">
          <Link
            to="https://www.facebook.com/hanifsikder922"
            target="_blank"
            className="text-xl  hover:text-blue-700"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.linkedin.com/in/hanifsikder920/"
            target="_blank"
            className="text-xl  hover:text-blue-700"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://github.com/hanifsikder921"
            target="_blank"
            className="text-xl  hover:text-blue-700"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://x.com/hanifsikder920"
            target="_blank"
            className="text-xl hover:text-blue-700"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
      <div className="w-11/12 mx-auto ">
        <Hero />

        <Framework />

        <MyService />

        <MyLatestProject />

        <Skill />

        <MyEducation />

        <PricingTable />

        <ContactForm />

        <FaqSection />

        <About />
      </div>
    </div>
  );
};

export default Home;
