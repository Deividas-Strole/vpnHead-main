import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/vpnHeadLogo.png';
import '../css/Home.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="VPN Logo" className="logo" />
      </div>

      <div className="menu-container">
        <nav className="nav-menu">
          <ul>
            <li onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</li>
            <li>Library</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
