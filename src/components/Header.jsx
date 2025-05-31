import React from 'react';
import logo from '../assets/vpnHeadLogo.png';
import '../css/Home.css'; // Optional: create a separate CSS for header if needed

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="VPN Logo" className="logo" />
      </div>

      <div className="menu-container">
        <nav className="nav-menu">
          <ul>
            <li>Home</li>
            <li>Library</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
