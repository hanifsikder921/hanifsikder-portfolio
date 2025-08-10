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

const Home = () => {
    return (
        <div className='w-11/12 md:max-w-7xl mx-auto md:px-2'>

           <Hero/>

           <Framework/>

           <MyService/>

           <MyLatestProject/>

           <MyEducation/>

           <PricingTable/>

           <ContactForm/>

           <FaqSection/>

           <About/>

        </div>
    );
};

export default Home;