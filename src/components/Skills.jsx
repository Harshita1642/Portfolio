import React from 'react';
import './Skills.css';

// Import the images you want to use
import leftImage from '../assets/Developer.png';
import htmlImg from '../assets/html5.jpg';
import cssImg from '../assets/css3.jpg';
import jsImg from '../assets/js.png';
import javaImg from '../assets/java.png';
import cppImg from '../assets/cpp.png';
import shellImg from '../assets/shell-logo.jpg';
import pythonImg from '../assets/python-logo.jpg';
import postgresImg from '../assets/postgresql-logo.png';
import mysqlImg from '../assets/mysql-logo.jpg';
import mongoImg from '../assets/mongo.png';
import opencvImg from '../assets/opencv-logo.jpg';
import numpyImg from '../assets/numpy-logo.jpg';
import pandasImg from '../assets/pandas-logo.jpg';
import matplotlibImg from '../assets/matplotlib-logo.jpg';
import sklearnImg from '../assets/sk-learn-logo.jpg';
import gitImg from '../assets/git.png';
import vercelImg from '../assets/vercel.png';
import netlifyImg from '../assets/netlify.jpg';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-image-container">
        <img src={leftImage} alt="Skills" className="skills-image" />
      </div>
      <div className="skills-content">
        <h2>What I do</h2>
        <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
        
        <div className="skills-section">
          <h3>Languages</h3>
          <div className="skills-icons">
            {[
              { img: htmlImg, label: 'HTML' },
              { img: cssImg, label: 'CSS' },
              { img: jsImg, label: 'JavaScript' },
              { img: javaImg, label: 'Java' },
              { img: cppImg, label: 'C++' },
              { img: shellImg, label: 'Shell Scripting' },
              { img: pythonImg, label: 'Python' },
            ].map(skill => (
              <div className="skill-icon" key={skill.label}>
                <img src={skill.img} alt={skill.label} />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-sections-row">
          <div className="skills-section">
            <h3>Databases</h3>
            <div className="skills-icons">
              {[
                { img: postgresImg, label: 'PostgreSQL' },
                { img: mysqlImg, label: 'MySQL' },
                { img: mongoImg, label: 'MongoDB' },
              ].map(skill => (
                <div className="skill-icon" key={skill.label}>
                  <img src={skill.img} alt={skill.label} />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-section">
            <h3>Others</h3>
            <div className="skills-icons">
              {[
                { img: gitImg, label: 'Git' },
                { img: vercelImg, label: 'Vercel' },
                { img: netlifyImg, label: 'Netlify' },
              ].map(skill => (
                <div className="skill-icon" key={skill.label}>
                  <img src={skill.img} alt={skill.label} />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h3>Frameworks</h3>
          <div className="skills-icons">
            {[
              { img: opencvImg, label: 'OpenCV' },
              { img: numpyImg, label: 'NumPy' },
              { img: pandasImg, label: 'Pandas' },
              { img: matplotlibImg, label: 'Matplotlib' },
              { img: sklearnImg, label: 'Sk-learn' },
            ].map(skill => (
              <div className="skill-icon" key={skill.label}>
                <img src={skill.img} alt={skill.label} />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="highlight-text">
          <p>⚡ Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.</p>
          <p>⚡ Proficient in delivering Backend Services</p>
          <p>⚡ Develop highly interactive Front end / User Interfaces for your web applications</p>
          <p>⚡ Working upon Integrating Machine Learning Models to the Full Stack Websites</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
