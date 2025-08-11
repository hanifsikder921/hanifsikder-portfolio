import React from 'react';
import aboutImage from '../../assets/aboutPhoto.jpg'; 


const About = () => {
    return (
        <div id='about-section' className='bg-gray-50 rounded-lg my-15 py-10'>
            <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row  justify-between gap-5">



                {/* Right: About Text */}
                <div data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-emerald-600 mb-4">About Me</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        I'm <span className="text-emerald-500 font-semibold">Hanif Sikder</span>, a passionate and experienced
                        <span className="text-blue-500 font-semibold"> MERN Stack</span> and
                        <span className="text-green-500 font-semibold"> Frontend Developer</span> with over 2 years of hands-on experience.
                    </p>

                    <p className="mt-4 text-gray-600 text-xl ">
                        I specialize in building fast, responsive, and scalable web applications using the latest technologies like React, Tailwind CSS, Node.js, MongoDB, and Firebase. My journey in web development has been driven by a strong passion for clean code, creative design, and delivering real-world business solutions.
                    </p>

                    <p className="mt-4 text-gray-600 text-xl ">
                        Whether it's collaborating in a team, handling client projects, or working solo — I always aim to deliver with precision and performance.
                    </p>

                    <p className="mt-4 text-gray-600 italic text-xl ">
                        "Let's create something amazing together!"
                    </p>
                </div>
                {/* Left: Profile Image */}
                <div>
                    <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        src={aboutImage}
                        alt="Hanif Sikder"
                        className=" rounded-lg shadow-lg mx-auto"
                    />
                </div>

            </div>
        </div>
    );
};

export default About;
