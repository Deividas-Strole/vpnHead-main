import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/vpnHeadLogo.png';
import '../css/Home.css';
import { Link } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/admin/login" style={{ fontSize: '24px', color: 'blue' }}>
          <img src={logo} alt="VPN Logo" className="logo" />
        </Link>
      </div>

      <div className="menu-container">
        <nav className="nav-menu">
          <ul>
            <li onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</li>
            <li onClick={() => navigate('/library')} style={{ cursor: 'pointer' }}>Library</li>
            <li onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/vpnHeadLogo.png';
// import '../css/Home.css';

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="header-container">
//       <div className="logo-container">
//         <img src={logo} alt="VPN Logo" className="logo" />
//       </div>

//       <div className="menu-container">
//         <nav className="nav-menu">
//           <ul>
//             <li onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</li>
//             <li>Library</li>
//             <li>About</li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;
