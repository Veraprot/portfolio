import React from 'react';
import './assets/stylesheets/app.scss';
// import tree from '../src/assets/images/tree-city.png'
// import profile from '../src/assets/images/profile.jpg'
import Navbar from './components/Navbar';
import Skills from './components/Skills'
import Background from './components/Background';
import Work from './components/Work';
import linkedin from './assets/images/linkedin-logo.png'
import github from './assets/images/github.png'
import message from './assets/images/envelope.png'

function App() {
  return (
    <>
      <Navbar/>
      <div className="app-container">
        <div className="hero-container">
            <div>
              <span><img alt = "" src ={linkedin} className = "profile-link-logos"></img></span>
              <span><img alt = "" src ={github} className = "profile-link-logos"></img></span>
              <span><img alt = "" src ={message} className = "profile-link-logos"></img></span>
            </div>
            <p className="about-me-content">
              Artist, Full Stack Web Developer & Software Engineering Coach <br/>  
            </p>
            <p className="name-title">Hi, I'm <span className = "make-bold">Vera Protopopova</span> and I'm on a mission to change the world.</p>
            <button class="download-resume-btn">Resume</button>
        </div>
        <Background/>
        <Skills/>
        <Work/>
      </div>
    </>
  );
}

export default App;
