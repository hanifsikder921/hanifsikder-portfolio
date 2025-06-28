import React from 'react';
import Hero from '../Hero/Hero';
import Framework from '../Framework/Framework';
import MyService from '../Service/MyService';
import MyLatestProject from '../LatestProject/MyLatestProject';
import MyEducation from '../MyEducation/MyEducation';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto md:px-2'>

           <Hero/>

           <Framework/>

           <MyService/>

           <MyLatestProject/>

           <MyEducation/>

        </div>
    );
};

export default Home;