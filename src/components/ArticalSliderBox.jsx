// src/components/ArticalSliderBox.jsx
import React from 'react';
import '../css/ArticalSliderBox.css'; // still using same styles
import shieldIcon from '../assets/vpnWorld.png';

const ArticalSliderBox = ({ text }) => {
  return (
    <div className="red-box">
      <img src={shieldIcon} alt="Shield" className="red-box-image" />
      <h2 className="red-box-title">{text}</h2>
    </div>
  );
};

export default ArticalSliderBox;