import React, { useState } from 'react'
import { Menu, Home, Info, Briefcase, Mail } from "react-feather";

const Navber = ({ isOpen, toggleSidebar }) => {

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          <Menu />
        </button>
        <ul>
          <li> <Home /> {isOpen ? <span>Home</span> : ""}</li>
          <li> <Info /> {isOpen ? <span>About</span> : ""} </li>
          <li> <Briefcase /> {isOpen ? <span>Services</span> : ""} </li>
          <li> <Mail />  {isOpen ? <span>Contact</span> : ""}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navber
