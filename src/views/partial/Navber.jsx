import React from 'react';
import { Home, Info, Briefcase, Mail, ChevronLeft, ChevronRight } from 'react-feather';

const Navber = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
      <ul className="menu-list">
        <li>
          <Home />
          {isOpen && <span>Home</span>}
        </li>
        <li>
          <Info />
          {isOpen && <span>About</span>}
        </li>
        <li>
          <Briefcase />
          {isOpen && <span>Services</span>}
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
