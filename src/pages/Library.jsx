import React from 'react';
import '../css/Home.css'; // Assuming your renamed CSS file is imported here
import whatIsVPN from '../assets/whatIsVpn.png';
import RedBox from '../components/VpnRedBox'; // Adjust path if necessary
import surfshark from '../assets/surfshark.jpg';
import Slider from '../components/Slider'; // Adjust path if necessary
import Header from '../components/Header'; // Adjust path if necessary
import ArticleHeadlines from '../components/ArticleHeadlines';

const Library = () => {
    return (
        <div className="home-container">
            <Header />

            <div className="what-is-vpn-content">
                <h1 className="headline">Library</h1>

            </div>

            <div className="App">
                <ArticleHeadlines />
            </div>



            <div className="where-get-vpn-content">
                <h1 className="headline">Where do You Get VPN?</h1>
                <p>We highly recommend Surfshark - best service for $1.99 per month!!!</p>
                <a href="https://get.surfshark.net/aff_c?offer_id=926&aff_id=38520" target="_blank" rel="noopener noreferrer">
                    <img src={surfshark} alt="SurfShark" className="surfshark-image" />
                </a>
            </div>




        </div>
    );
};

export default Library;
