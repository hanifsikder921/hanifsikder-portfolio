import React from 'react';
import Hero from '../Hero/Hero';
import Framework from '../Framework/Framework';
import MyService from '../Service/MyService';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto md:px-2'>

           <Hero/>

           <Framework/>

           <MyService/>

        </div>
    );
};

export default Home;