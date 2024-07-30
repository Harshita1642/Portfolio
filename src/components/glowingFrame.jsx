import React from 'react';
import glowingFrameImg from '../assets/pkp.jpg';
import myPicture from '../assets/yourImage.jpg';
import './GlowingFrame.css';

const GlowingFrame = () => {
  return (
    <div className="glowing-frame-container">
      <img src={glowingFrameImg} alt="Glowing Frame" className="glowing-background" />
      <div className="centered-image-container">
        <img src={myPicture} alt="My Picture" className="centered-image" />
      </div>
    </div>
  );
}

export default GlowingFrame;
