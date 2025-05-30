import React from 'react';
import '../css/VpnRedBox.css'; // Import the CSS file for styling
import shieldIcon from '../assets/vpnWorld.png';

const RedBox = ({ text }) => {
  return (
    <div className="red-box">
      <img src={shieldIcon} alt="Shield" className="red-box-image" />
      {text}
    </div>
  );
};

export default RedBox;
