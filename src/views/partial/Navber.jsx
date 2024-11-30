import React from 'react';
import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Mail, ChevronLeft, ChevronRight } from 'react-feather';

const Navber = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
      <ul className="menu-list">
        <Link to="/dashboard" className='text-white' style={{ textDecoration: "none" }}>
          <li>
            <Home />
            {isOpen && <span>Home</span>}
          </li>
        </Link>
        <Link to="/about" className='text-white' style={{ textDecoration: "none" }}>
          <li>
            <Info />
            {isOpen && <span>About</span>}
          </li>
        </Link>
        <li>
          <Briefcase />
          {isOpen && <span>Work</span>}
        </li>
        <li>
          <Mail />
          {isOpen && <span>Contact</span>}
        </li>
      </ul>
    </div>
  );
};

export default Navber;
