import React from 'react';
import '../css/Home.css'; // Assuming your renamed CSS file is imported here
import whatIsVPN from '../assets/whatIsVpn.png';
import RedBox from '../components/VpnRedBox'; // Adjust path if necessary
import surfshark from '../assets/surfshark.jpg';
import Slider from '../components/Slider'; // Adjust path if necessary
import Header from '../components/Header'; // Adjust path if necessary
import ArticleHeadlines from '../components/ArticleHeadlines';
import WhereGetVpn from '../components/WhereGetVpn';
import '../css/WhereGetVpn.css'; // Assuming your CSS file is named WhereGetVpn.css

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
                <WhereGetVpn />
            </div>




        </div>
    );
};

export default Library;
