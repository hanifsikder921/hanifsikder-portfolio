import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; 
import profileImage from '../../../assets/profile.png'
import CustomButton from '../../../components/Shared/CustomButton';
import DownloadButton from '../../../components/Shared/DownloadButton';

const Hero = () => {
    return (
        <div className='md:my-20 flex md:flex-row flex-col-reverse items-center '>
            <section className='flex-1'>
                <h2 className='text-2xl'>Hello There !</h2>

                <div className='md:text-5xl text-3xl mt-5 md:space-y-3 space-y-2'>
                    <h2>I'm <span>Hanif Sikder</span></h2>
                    <p>
                        I craft responsive UIs as a{" "}
                        <span className="text-green-400 font-semibold">Frontend Developer</span>.
                       
                    </p>
                    <p className='min-h-25'>
                        and build scalable apps as a{" "}
                          <span className="text-blue-400 font-semibold">
                            <Typewriter
                                words={['MERN Stack Developer']}
                                loop={true}
                                cursor
                                cursorStyle="|✏️"
                                typeSpeed={150}
                                cursorBlinking={true}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                      
                    </p>
                </div>

                <p className='text-xl text-gray-500 font-semibold md:my-10 my-5'>
                    I'm an experienced MERN Stack and Frontend Developer with over 2 years of hands-on expertise in the field, skilled in team collaboration and delivering scalable web applications.
                </p>

                <div className='gap-2 flex w-full flex-col md:flex-row'>
                    <CustomButton text={'Download Cv'} />
                    <DownloadButton text={'Hire Me'} />
                </div>
            </section>

            <section className='flex-1'>
                <div className='md:w-[500px] w-80 mx-auto'>
                    <img src={profileImage} alt="Hanif Sikder Image" />
                </div>
            </section>
        </div>
    );
};

export default Hero;
