import React from 'react';
import './cssComponents/LaserEffect.css';

const LaserEffect = () => {
  return (
    <div className="animation-container">
      <div className="lightning-container">
        <div className="lightning white"></div>
        <div className="lightning red"></div>
      </div>
    </div>
  );
};

export default LaserEffect;
