import React, { useState } from 'react'
import { Outlet } from "react-router-dom";

import Navber from '../views/partial/Navber';
import Footer from '../views/partial/Footer';


const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className={`layout-container ${isOpen ? 'sidebar-open' : ''}`}>
                <Navber isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
