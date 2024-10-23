import React from 'react'
import { Outlet } from "react-router-dom";

import Navber from '../views/partial/Navber';
import Footer from '../views/partial/Footer';


const Layout = () => {
    return (
        <>
            <Navber />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
