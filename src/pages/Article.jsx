import React from 'react';
import '../css/Home.css';
import whatIsVPN from '../assets/whatIsVpn.png';
import RedBox from '../components/VpnRedBox';
import surfshark from '../assets/surfshark.jpg';
import Slider from '../components/Slider';
import Header from '../components/Header'; // ← Import new component

const Article = () => {
  return (
    <div className="home-container">
      <Header /> 

      <div className="heading-text">
        <h1>Reading makes me smarter.</h1>
      </div>

      <div className="what-is-vpn-content">
        <h1 className="headline">Article title</h1>
        <p>Articla text</p>
       
      </div>

      <div className="articles-content">
              <h1 className="headline">Articles</h1>
              <Slider />
            </div>
          </div>
          );
        };

        export default Article;