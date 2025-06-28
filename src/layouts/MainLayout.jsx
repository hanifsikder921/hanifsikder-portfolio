import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';



const MainLayout = () => {
    return (
        <div>

            <header>
               <Navbar></Navbar>
            </header>


            <main>

                {/* Dynamic Change Element */}
                <section>
                    <Outlet></Outlet>
                </section>

            </main>






        </div>
    );
};

export default MainLayout;