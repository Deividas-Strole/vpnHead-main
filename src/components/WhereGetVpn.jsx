import React from 'react';
import '../css/WhereGetVpn.css'; // Assuming your CSS file is named WhereGetVpn.css
import surfshark from '../assets/surfshark.jpg'; // Adjust the path to your image file

export default function WhereGetVpn() {
    return (
        <div className="where-get-vpn-content">
            <h1 className="headline">Where do You Get VPN?</h1>
            <p>We highly recommend Surfshark - best service for $2.19 per month!!!</p>
            <a href="https://get.surfshark.net/aff_c?offer_id=926&aff_id=38520" target="_blank" rel="noopener noreferrer">
                <img src={surfshark} alt="SurfShark" className="surfshark-image" />
            </a>
        </div>
    );
}

