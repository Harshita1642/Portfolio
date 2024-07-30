import React from 'react';
import GlowingFrame from './glowingFrame';
import './Home.css';
import Skills from './Skills';
import Showcase from './ShowCase';
import ContactForm from './Contactus';
const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../asseets/CVnew.pdf'; // Specify the path to your file
    link.download = 'CVnew.pdf'; // Specify the file name
    link.click();
  };
  return (
    <>
    <div className='main-container'>
      <div className='photo-div'>
        <div className='info'>
          <h1 className='firstname'>Harshita </h1>
          <p className='role'>Software Developer</p>
        </div>
      </div>
      <div className="content">
        <div className="text-section">
          <h1>Hi, I'm Harshita.</h1>
          <div className='about-me-text'>I am a Computer Science Grad Student at Arizona State University. I enjoy 
            problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on 
            technologies like Python, Flask, MySQL, PostgreSQL, MongoDB, HTML5, CSS,NodeJs,ExpressJs,Java,Swings,Netbeans, C++ 
            during my bachelor's. I have developed projects based on various tech stacks, including Python with Tkinter and MySQL, 
            Java with Swing, NetBeans, and MySQL, as well as React.js with Node.js, Express.js, and MongoDB. I am passionate about developing 
            complex applications that solve real-world problems impacting millions of users.</div>
          <div className="button-container">
            <button className="amazing-button" onClick={handleDownload}>Resume</button>
            <button className="amazing-button">Skills</button>
          </div>
        </div>
        <div className="glowing-frame-section">
          <GlowingFrame />
        </div>
      </div>
        <div>
          <Skills/>
        </div>
        <div>
          <Showcase/>
        </div>
        <div>
          <ContactForm/>
        </div>
      </div>
    </>
  );
}

export default Home;
