import React from 'react';
import './ShowCase.css';

const Showcase = () => {
  return (
    <div className="showcase-container">
      <div className="proficiency-content">
        <h2>Proficiency</h2>
        <div className="proficiency-bar">
          <span>Frontend/Design</span>
          <div className="progress">
            <div className="progress-bar frontend"></div>
          </div>
        </div>
        <div className="proficiency-bar">
          <span>Backend</span>
          <div className="progress">
            <div className="progress-bar backend"></div>
          </div>
        </div>
        <div className="proficiency-bar">
          <span>Programming</span>
          <div className="progress">
            <div className="progress-bar programming"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;