import React from 'react';
import '../css/Home.css';
import whatIsVPN from '../assets/whatIsVpn.png';
import RedBox from '../components/VpnRedBox';
import surfshark from '../assets/surfshark.jpg';
import Slider from '../components/Slider';
import Header from '../components/Header'; // ← Import new component
import WhereGetVpn from '../components/WhereGetVpn';
import '../css/WhereGetVpn.css'; // Assuming your CSS file is named WhereGetVpn.css

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="heading-text">
        <h1>VPNs Are All We Think About.</h1>
      </div>

      <div className="what-is-vpn-content">
        <h1 className="headline">What is VPN?</h1>
        <p>A VPN (Virtual Private Network) is an app that keeps you safe online by hiding what you do and where you are, like putting your internet in a private tunnel.</p>
        <img src={whatIsVPN} alt="VPN Illustration" className="whatIsVPN-image" />
        <p>In geek language: A VPN is a networking technology that establishes an encrypted tunnel between a user's device and a remote server, masking the user's IP address and securing data transmission to protect online activity and location from external monitoring.</p>
      </div>

      <div className='why-you-need-vpn-content'>
        <h1 className="headline">Why Do You Need A VPN?</h1>
        <div className='red-box-row'>
          <RedBox text={"Privacy from Snooping Eyes"} />
          <RedBox text={"Secure Public Wi-Fi Use"} />
          <RedBox text={"Unlock Geo-Restricted Content"} />
        </div>
        <div className='red-box-row'>
          <RedBox text={"Avoid Tracking & Targeted Ads"} />
          <RedBox text={"Remote Work & Data Protection"} />
          <RedBox text={"Bypass Censorship"} />
        </div>
      </div>

      <div className="where-get-vpn-content">
        <WhereGetVpn />
      </div>

      <div className="articles-content">
        <h1 className="headline">Articles</h1>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
