import React from 'react';
import whatIsVPN from '../assets/whatIsVpn.png';
import RedBox from '../components/VpnRedBox';
import surfshark from '../assets/surfshark.jpg';
import Slider from '../components/Slider';
import Header from '../components/Header';
import ArticleHeadlines from '../components/ArticleHeadlines';
import WhereGetVpn from '../components/WhereGetVpn';
import '../css/Library.css';

const Library = () => {
    return (
        <div className="library-container">
            <Header />

            <div className="library-title">
                <h1>Library</h1>
            </div>

            <div className="library-description">
                <h1 className="library-headline">Reading makes you happier—and that's a fact!</h1>
            </div>

            <div className="library-articles">
                <ArticleHeadlines />
            </div>

            <div className="library-where-to-get">
                <WhereGetVpn />
            </div>
        </div>
    );
};

export default Library;
