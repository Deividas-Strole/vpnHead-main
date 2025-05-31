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



// import React from 'react';
// import '../css/VpnRedBox.css'; // Import the CSS file for styling
// import shieldIcon from '../assets/vpnWorld.png';

// const RedBox = ({ text }) => {
//   return (
//     <div className="red-box">
//       <img src={shieldIcon} alt="Shield" className="red-box-image" />
//       {text}
//     </div>
//   );
// };

// export default RedBox;
