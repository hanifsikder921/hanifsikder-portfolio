import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoMenuSharp } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {

    const navMenu = <div className='flex text-lg flex-col md:flex-row items-center justify-center md:gap-4 font-semibold'>



      

        <li className='hover:bg-emerald-700 hover:rounded-md duration-300 flex items-center justify-center'>
            <ScrollLink
                to="home-section"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-white hover:underline"
                activeClass="text-yellow-300 underline"
                spy={true}
            >
                Home
            </ScrollLink>
        </li>
        <li className='hover:bg-emerald-700 hover:rounded-md duration-300 flex items-center justify-center'>
            <ScrollLink
                to="service-section"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-white hover:underline"
                activeClass="text-yellow-300 underline"
                spy={true}
            >
                Service
            </ScrollLink>
        </li>
        
        <li className='hover:bg-emerald-700 hover:rounded-md duration-300 flex items-center justify-center'>
            <ScrollLink
                to="projects-section"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-white hover:underline"
                activeClass="text-yellow-300 underline"
                spy={true}
            >
                Projects
            </ScrollLink>
        </li>

        <li className='hover:bg-emerald-700 hover:rounded-md duration-300 flex items-center justify-center'>
            <ScrollLink
                to="faq-section"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-white hover:underline"
                activeClass="text-yellow-300 underline"
                spy={true}
            >
                FAQ
            </ScrollLink>
        </li>
        <li className='hover:bg-emerald-700 hover:rounded-md duration-300 flex items-center justify-center'>
            <ScrollLink
                to="about-section"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-white hover:underline"
                activeClass="text-yellow-300 underline"
                spy={true}
            >
                About Me
            </ScrollLink>
        </li>


       



    



    </div>
    return (
        <div className=' bg-emerald-500 '>

            <div className="navbar p-0 md:p-2 md:w-11/12 mx-auto">
                <div className="navbar-start md:w-[50%] w-[65%]">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <IoMenuSharp className='text-white font-bold text-3xl' />
                        </div>
                        <ul
                            tabIndex={0}
                            className=" w-screen menu-sm dropdown-content bg-emerald-500 z-1 mt-3 p-2 shadow">
                            {navMenu}
                        </ul>
                    </div>
                    <Link className="text-xl md:text-4xl font-bold text-white">Hanif <span className='text-yellow-300'>S</span>ikder</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end md:w-[50%] w-[35%] md:pr-0 pr-2">
                    <ScrollLink  to='contact-section' className='bg-white cursor-pointer text-emerald-500 font-semibold md:px-5 md:py-3 md:text-xl md:rounded-full  rounded-xl p-2 text-base hover:bg-gray-200 duration-200'>Contact Me</ScrollLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;