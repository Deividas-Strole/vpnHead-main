import React from 'react';
import '../css/Home.css';
import logo from '../assets/vpnHeadLogo.png';

const Home = () => {
  return (
    <div className="home-container">

      <header className="header">
        
        <img src={logo} alt="VPN Logo" className="logo" />

        <nav className="nav-menu">
          <ul>
            <li>Home</li>
            <li>Library</li>
            <li>About</li>
          </ul>
        </nav>

      </header>

      <main className="main-content">
        <h1 className="headline">What is VPN?</h1>
        <img src={logo} alt="VPN Illustration" className="main-image" />
      </main>
    </div>
  );
};

export default Home;
