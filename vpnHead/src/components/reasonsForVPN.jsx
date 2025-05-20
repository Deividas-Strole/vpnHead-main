import React from 'react';

const RedBox = ({ children }) => {
  return (
    <div style={{
      border: '2px solid red',
      padding: '16px',
      borderRadius: '8px',
      color: '#333',
      maxWidth: '400px',
      margin: '10px auto',
      fontFamily: 'Arial, sans-serif',
    }}>
      {children}
    </div>
  );
};

export default RedBox;
