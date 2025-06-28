import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../pages/Footer/Footer';



const MainLayout = () => {
    return (
        <div>

            <header className='sticky z-50 top-0'>
               <Navbar></Navbar>
            </header>


            <main>

                {/* Dynamic Change Element */}
                <section>
                    <Outlet></Outlet>
                </section>

            </main>

            <Footer/>






        </div>
    );
};

export default MainLayout;